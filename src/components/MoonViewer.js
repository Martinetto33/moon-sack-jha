"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SummaryPanel from "./SummaryPanel";
import { MoonDataDTO, TARGET_PLANETS } from "../app/api/MoonData.js";
import { SummaryCreator } from "../app/api/Summary.js";
import { parseLandingSites } from "./landingSites";
import SidePanel from "./SidePanel";
import "../resources/css/main.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MOON_RADIUS = 1737400; // meters
const EARTH_RADIUS = 6371000; // meters
// NASA Moon Trek services, the same ones its own 3D globe uses.
const MOON_TREK_WAC_MOSAIC =
  "https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg";
const MOON_TREK_TERRAIN = "https://marshub.s3.amazonaws.com/moon_v14/";
const HELP =
  "Drag to rotate · scroll to zoom · right-drag to tilt · double-click the Moon to stand on it";

export default function MoonViewer() {
  const hostRef = useRef(null);
  const viewerRef = useRef(null);
  const cesiumRef = useRef(null);
  const [status, setStatus] = useState("Initializing Cesium…");
  const [paused, setPaused] = useState(false);
  const [onSurface, setOnSurface] = useState(false);
  // Every site from the loaded GeoJSON files (see parseLandingSites).
  const [landingSites, setLandingSites] = useState([]);
  const fileInputRef = useRef(null);
  const summary = useMemo(createMockSummary, []);

  useEffect(() => {
    let disposed = false;

    (async () => {
      // Must be set before Cesium loads its workers and assets.
      window.CESIUM_BASE_URL = `${BASE}/cesium/`;
      const Cesium = await import("cesium");
      if (disposed) return;
      cesiumRef.current = Cesium;

      // The Moon is the globe, so Cesium's own camera controls navigate it.
      // Lighting and the Sun are computed in the Moon-fixed frame.
      Cesium.Ellipsoid.default = Cesium.Ellipsoid.MOON;
      Cesium.CelestialFrameTransforms.computeIcrfToCentralBodyFixedMatrix = (
        date,
        result,
      ) => icrfToMoonFixed(Cesium, date, result);
      // Cesium culls what is behind a sphere at the lowest loaded terrain, and
      // everything when the camera is inside it. Standing in a crater can be
      // below it, which hid the Earth and the Sun: the ground still hides them.
      // shortcut: reads Occluder's private _horizonDistance, its "camera inside" flag; recheck on Cesium upgrades.
      const isVisible = Cesium.Occluder.prototype.isBoundingSphereVisible;
      Cesium.Occluder.prototype.isBoundingSphereVisible = function (sphere) {
        return (
          this._horizonDistance === Number.MAX_VALUE ||
          isVisible.call(this, sphere)
        );
      };

      const viewer = new Cesium.Viewer(hostRef.current, {
        globe: new Cesium.Globe(Cesium.Ellipsoid.MOON),
        // Relief from LOLA elevation data. No vertex normals: layer.json lists
        // them but the tiles have none, and requesting them breaks sunlight.
        terrain: new Cesium.Terrain(
          Cesium.CesiumTerrainProvider.fromUrl(MOON_TREK_TERRAIN),
        ),
        // Low-res local texture under the WAC tiles: shown while they load
        // or if Moon Trek is unreachable.
        baseLayer: Cesium.ImageryLayer.fromProviderAsync(
          Cesium.SingleTileImageryProvider.fromUrl(`${BASE}/textures/moon.jpg`),
        ),
        // Cesium only adds the star background by default for the Earth.
        skyBox: Cesium.SkyBox.createEarthSkyBox(),
        baseLayerPicker: false,
        animation: false,
        timeline: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        fullscreenButton: true,
        infoBox: false,
        selectionIndicator: false,
      });
      viewerRef.current = viewer;

      // LROC WAC global mosaic, ~100 m/pixel (same basemap as QuickMap).
      viewer.imageryLayers.addImageryProvider(
        new Cesium.WebMapTileServiceImageryProvider({
          url: MOON_TREK_WAC_MOSAIC,
          layer: "LRO_WAC_Mosaic_Global_303ppd_v02",
          style: "default",
          tileMatrixSetID: "default028mm",
          tilingScheme: new Cesium.GeographicTilingScheme(),
          maximumLevel: 8,
          credit:
            "LROC WAC mosaic: NASA/GSFC/Arizona State University, via NASA Moon Trek",
        }),
      );

      viewer.scene.backgroundColor = Cesium.Color.BLACK;
      viewer.scene.globe.enableLighting = true;
      viewer.scene.globe.showGroundAtmosphere = false;

      // Simulation clock: start at "now" and run in real time.
      viewer.clock.currentTime = Cesium.JulianDate.now();
      viewer.clock.multiplier = 1;
      viewer.clock.shouldAnimate = true;

      // Earth orbiting the Moon, with its real orientation, and a stand-in
      // for the Moon drawn around the globe when it would look too small.
      // Both are enlarged so they never look smaller than MIN_SCREEN_RADIUS.
      const earth = viewer.scene.primitives.add(
        texturedSphere(
          Cesium,
          EARTH_RADIUS,
          `${BASE}/textures/earth-texture.jpg`,
        ),
      );
      const moonStandIn = viewer.scene.primitives.add(
        texturedSphere(
          Cesium,
          MOON_RADIUS,
          `${BASE}/textures/moon.jpg`,
          SUNLIT_SPHERE_FS,
        ),
      );
      viewer.scene.preUpdate.addEventListener((_, time) => {
        const earthPosition = getEarthPosition(Cesium, time);
        earth.modelMatrix = Cesium.Matrix4.multiplyByScale(
          Cesium.Matrix4.fromRotationTranslation(
            getEarthOrientation(Cesium, time),
            earthPosition,
            earth.modelMatrix,
          ),
          sphereScale(
            Cesium,
            minimumScale(Cesium, viewer, earthPosition, EARTH_RADIUS),
          ),
          earth.modelMatrix,
        );
        const moonScale = minimumScale(
          Cesium,
          viewer,
          Cesium.Cartesian3.ZERO,
          MOON_RADIUS,
        );
        moonStandIn.show = moonScale > 1;
        moonStandIn.modelMatrix = Cesium.Matrix4.fromScale(
          sphereScale(Cesium, moonScale),
          moonStandIn.modelMatrix,
        );
      });

      // Preset 3: double-click the Moon to stand on that point.
      // Landing sites will call standOn the same way.
      const input = viewer.screenSpaceEventHandler;
      input.setInputAction((click) => {
        const ray = viewer.camera.getPickRay(click.position);
        const position = ray && viewer.scene.globe.pick(ray, viewer.scene);
        if (position) {
          standOn(Cesium, viewer, position).then(() => setOnSurface(true));
        }
      }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

      // While standing, dragging turns the view and keeps the horizon level.
      let dragFrom;
      input.setInputAction((down) => {
        dragFrom = Cesium.Cartesian2.clone(down.position);
      }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
      input.setInputAction(() => {
        dragFrom = undefined;
      }, Cesium.ScreenSpaceEventType.LEFT_UP);
      input.setInputAction((move) => {
        if (!dragFrom || !isStanding(viewer)) return;
        const camera = viewer.camera;
        const radiansPerPixel =
          camera.frustum.fovy / viewer.canvas.clientHeight;
        camera.setView({
          orientation: {
            heading:
              camera.heading -
              (move.endPosition.x - dragFrom.x) * radiansPerPixel,
            pitch: Cesium.Math.clamp(
              camera.pitch +
                (move.endPosition.y - dragFrom.y) * radiansPerPixel,
              -MAX_PITCH,
              MAX_PITCH,
            ),
            roll: 0,
          },
        });
        dragFrom = Cesium.Cartesian2.clone(move.endPosition, dragFrom);
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

      // Start with the Sun, the Earth and the Moon in view.
      flyToSystem(Cesium, viewer, 0);
      setStatus(HELP);
    })().catch((err) => {
      console.error(err);
      setStatus("Failed to load Cesium. Check the console.");
    });

    return () => {
      disposed = true;
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, []);

  const withViewer = (fn) => {
    const viewer = viewerRef.current;
    const Cesium = cesiumRef.current;
    if (viewer && Cesium) fn(Cesium, viewer);
  };

  const togglePlay = () => {
    withViewer((_, viewer) => {
      viewer.clock.shouldAnimate = !viewer.clock.shouldAnimate;
      setPaused(!viewer.clock.shouldAnimate);
    });
  };

  const setSpeed = (multiplier) => {
    withViewer((Cesium, viewer) => {
      viewer.clock.multiplier = multiplier;
      viewer.clock.shouldAnimate = true;
      setPaused(false);
    });
  };

  const addLandingSites = async (event) => {
    const files = [...event.target.files];
    event.target.value = ""; // so the same file can be picked again
    for (const file of files) {
      try {
        const sites = parseLandingSites(await file.text(), file.name);
        // Adding a file again replaces its sites.
        setLandingSites((current) => [
          ...current.filter((site) => site.source !== file.name),
          ...sites,
        ]);
        setStatus(`Added ${sites.length} landing sites from ${file.name}.`);
      } catch (err) {
        setStatus(`Could not read ${file.name}: ${err.message}.`);
      }
    }
  };

  // The presets leave the surface.
  const goTo = (fly) => {
    withViewer(fly);
    setOnSurface(false);
    setStatus(HELP);
  };

  const look = (getPosition, name) => {
    withViewer((Cesium, viewer) => {
      const time = viewer.clock.currentTime;
      const visible = lookAt(Cesium, viewer, getPosition(Cesium, time));
      setStatus(visible ? HELP : `The ${name} is below the horizon from here.`);
    });
  };

  let isSummaryRendered = true; // TODO: toggle based on camera state (set to true when camera is on Moon surface)

  return (
    <>
      <div ref={hostRef} className="cesium-host">
        <div className="cesium-overlay-layer">
          <SummaryPanel isRendered={isSummaryRendered} summary={summary} />
        </div>
      </div>

      <div className="overlay">
        <div className="controls">
          <SidePanel className="panel"></SidePanel>
          <h1>🌕 Moon</h1>
          <p>Real-time lunar position computed with Cesium.</p>

          <div className="row">
            <button onClick={togglePlay}>
              {paused ? "▶ Play" : "⏸ Pause"}
            </button>
            <button
              onClick={() =>
                withViewer((C, v) => (v.clock.currentTime = C.JulianDate.now()))
              }
            >
              ⟲ Now
            </button>
          </div>

          <div className="row">
            <button onClick={() => setSpeed(1)}>1×</button>
            <button onClick={() => setSpeed(3600)}>1 h/s</button>
            <button onClick={() => setSpeed(86400)}>1 d/s</button>
          </div>

          <button onClick={() => fileInputRef.current.click()}>
            ➕ Add landing site
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".geojson,.json,application/geo+json,application/json"
            multiple
            hidden
            onChange={addLandingSites}
          />
        </div>

        <nav className="nav">
          <button onClick={() => goTo(flyToSystem)}>
            ☀️ Sun, Earth &amp; Moon
          </button>
          <button onClick={() => goTo(flyToMoon)}>🌕 Moon close-up</button>
          {onSurface && (
            <>
              <button onClick={() => look(getEarthPosition, "Earth")}>
                🌍 Look at Earth
              </button>
              <button onClick={() => look(getSunPosition, "Sun")}>
                ☀️ Look at Sun
              </button>
            </>
          )}
        </nav>
      </div>

      <div className="status">{status}</div>

    </>
  );
}

function createMockSummary() {
  const selectedTime = new Date();
  const samples = [
    {
      hours: -12,
      earthAzimuth: 20,
      earthElevation: -25,
      sunAzimuth: 300,
      sunElevation: 18,
    },
    {
      hours: -6,
      earthAzimuth: 80,
      earthElevation: -8,
      sunAzimuth: 340,
      sunElevation: 42,
    },
    {
      hours: 0,
      earthAzimuth: 145,
      earthElevation: 12,
      sunAzimuth: 20,
      sunElevation: 55,
    },
    {
      hours: 6,
      earthAzimuth: 220,
      earthElevation: 24,
      sunAzimuth: 60,
      sunElevation: 28,
    },
    {
      hours: 12,
      earthAzimuth: 300,
      earthElevation: -15,
      sunAzimuth: 100,
      sunElevation: -10,
    },
  ];
  const toMoonData = (target, azimuthKey, elevationKey) =>
    samples.map(({ hours, ...sample }) => {
      const time = new Date(selectedTime.getTime() + hours * 60 * 60 * 1000);
      return new MoonDataDTO(
        target,
        time,
        sample[azimuthKey],
        sample[elevationKey],
        false,
        false,
      );
    });
  const startTime = new Date(selectedTime.getTime() - 12 * 60 * 60 * 1000);
  const endTime = new Date(selectedTime.getTime() + 12 * 60 * 60 * 1000);
  const creator = new SummaryCreator({
    latitude: 0.674,
    longitude: 23.473,
    startTime,
    endTime,
    moonToEarthDTOs: toMoonData(
      TARGET_PLANETS.EARTH,
      "earthAzimuth",
      "earthElevation",
    ),
    moonToSunDTOs: toMoonData(
      TARGET_PLANETS.SUN,
      "sunAzimuth",
      "sunElevation",
    ),
    wantedTargets: {
      earth: { elevation: 15, azimuth: 180 },
      sun: { elevation: 45, azimuth: 0 },
    },
  });

  return creator.selectTime(selectedTime);
}

/** Rotation from ICRF to the Moon-fixed frame (IAU model). */
function icrfToMoonFixed(Cesium, time, result = new Cesium.Matrix3()) {
  // Transforms.computeIcrfToMoonFixedMatrix (Cesium 1.147) flips the lunar
  // pole; IauOrientationAxes, which orients Cesium's own Moon, is correct.
  // shortcut: IauOrientationAxes is marked private in Cesium; if it is removed, compute the IAU rotation here.
  return new Cesium.IauOrientationAxes().evaluate(time, result);
}

/** Earth's centre in the Moon-fixed frame (meters). */
function getEarthPosition(Cesium, time) {
  const moon =
    Cesium.Simon1994PlanetaryPositions.computeMoonPositionInEarthInertialFrame(
      time,
      new Cesium.Cartesian3(),
    );
  const toMoonFixed = icrfToMoonFixed(Cesium, time);
  return Cesium.Matrix3.multiplyByVector(
    toMoonFixed,
    Cesium.Cartesian3.negate(moon, moon),
    new Cesium.Cartesian3(),
  );
}

/** Rotation from the Earth-fixed to the Moon-fixed frame. */
function getEarthOrientation(Cesium, time) {
  // Falls back to an approximation until Earth orientation data has loaded.
  const toEarthFixed =
    Cesium.Transforms.computeIcrfToFixedMatrix(time) ??
    Cesium.Transforms.computeTemeToPseudoFixedMatrix(time);
  const toMoonFixed = icrfToMoonFixed(Cesium, time);
  return Cesium.Matrix3.multiply(
    toMoonFixed,
    Cesium.Matrix3.transpose(toEarthFixed, toEarthFixed),
    toMoonFixed,
  );
}

// Earth and Moon never look smaller than this fraction of the view height.
const MIN_SCREEN_RADIUS = 0.04;

/** Scale that keeps a sphere at least MIN_SCREEN_RADIUS of the view height. */
function minimumScale(Cesium, viewer, centre, radius) {
  const { camera } = viewer;
  const distance = Cesium.Cartesian3.distance(camera.positionWC, centre);
  const minimumRadius =
    MIN_SCREEN_RADIUS * 2 * Math.tan(camera.frustum.fovy / 2) * distance;
  return Math.max(1, minimumRadius / radius);
}

/**
 * Scale for a texturedSphere, with a half turn around its axis: EllipsoidGeometry
 * puts longitude 0 at the edge of the texture, standard maps have it in the middle.
 */
function sphereScale(Cesium, scale) {
  return new Cesium.Cartesian3(-scale, -scale, scale);
}

/**
 * A textured sphere placed each frame through its modelMatrix: a moving
 * ellipsoid entity renders white in Cesium 1.147, because its image material
 * is recreated every frame.
 */
function texturedSphere(Cesium, radius, image, fragmentShaderSource) {
  const appearance = new Cesium.MaterialAppearance({
    material: Cesium.Material.fromType("Image", { image }),
    fragmentShaderSource,
    closed: true,
  });
  return new Cesium.Primitive({
    geometryInstances: new Cesium.GeometryInstance({
      geometry: new Cesium.EllipsoidGeometry({
        radii: new Cesium.Cartesian3(radius, radius, radius),
        vertexFormat: appearance.vertexFormat,
      }),
    }),
    appearance,
  });
}

// Lit by the Sun like the globe seen from afar (Cesium's GlobeFS), so the
// Moon looks the same when its stand-in takes over.
const SUNLIT_SPHERE_FS = `
in vec3 v_positionEC;
in vec3 v_normalEC;
in vec2 v_st;

void main()
{
    czm_materialInput materialInput;
    materialInput.normalEC = normalize(v_normalEC);
    materialInput.positionToEyeEC = -v_positionEC;
    materialInput.st = v_st;
    czm_material material = czm_getMaterial(materialInput);
    float light = clamp(czm_getLambertDiffuse(czm_lightDirectionEC, materialInput.normalEC) * 5.0 + 0.3, 0.0, 1.0);
    // moon.jpg is about twice as bright as the WAC mosaic on the globe.
    out_FragColor = vec4(material.diffuse * 0.46 * czm_lightColor * light, material.alpha);
}
`;

/** Distance at which a sphere of `radius` fits the narrower field of view. */
function fitDistance(viewer, radius) {
  const { fovy, aspectRatio } = viewer.camera.frustum;
  return radius / (Math.tan(fovy / 2) * Math.min(1, aspectRatio));
}

/** Preset 1: Earth and Moon in the middle, the Sun near a top corner. */
function flyToSystem(Cesium, viewer, duration = 2) {
  const { Cartesian3 } = Cesium;
  setStanding(viewer, false);
  const time = viewer.clock.currentTime;
  const toSun = getSunPosition(Cesium, time);

  // Look a bit beside and below the Sun (60% of the half field of view
  // each way); Moon-fixed Z is close to the normal of the Moon's orbit.
  const { fovy, aspectRatio } = viewer.camera.frustum;
  const halfFovX = Math.atan(Math.tan(fovy / 2) * aspectRatio);
  const azimuth = Math.atan2(toSun.y, toSun.x) + 0.6 * halfFovX;
  const down = 0.6 * (fovy / 2);
  const direction = new Cartesian3(
    Math.cos(azimuth) * Math.cos(down),
    Math.sin(azimuth) * Math.cos(down),
    -Math.sin(down),
  );
  const right = Cartesian3.cross(
    direction,
    Cartesian3.UNIT_Z,
    new Cartesian3(),
  );
  const up = Cartesian3.normalize(
    Cartesian3.cross(right, direction, right),
    right,
  );

  const centre = Cartesian3.multiplyByScalar(
    getEarthPosition(Cesium, time),
    0.5,
    new Cartesian3(),
  );
  // Leave room at the edge for the Earth, enlarged to MIN_SCREEN_RADIUS.
  const distance =
    fitDistance(viewer, Cartesian3.magnitude(centre)) /
    (1 - (2 * MIN_SCREEN_RADIUS) / Math.min(1, aspectRatio));
  viewer.camera.flyTo({
    destination: Cartesian3.subtract(
      centre,
      Cartesian3.multiplyByScalar(direction, distance, new Cartesian3()),
      new Cartesian3(),
    ),
    orientation: { direction, up },
    duration,
  });
}

/** Preset 2: the near side of the Moon fills most of the view. */
function flyToMoon(Cesium, viewer) {
  setStanding(viewer, false);
  const from = Cesium.Cartesian3.normalize(
    getEarthPosition(Cesium, viewer.clock.currentTime),
    new Cesium.Cartesian3(),
  );
  const distance = fitDistance(viewer, MOON_RADIUS * 1.1);

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.multiplyByScalar(
      from,
      distance,
      new Cesium.Cartesian3(),
    ),
    orientation: {
      direction: Cesium.Cartesian3.negate(from, new Cesium.Cartesian3()),
      up: Cesium.Cartesian3.UNIT_Z,
    },
    duration: 2,
  });
}

const EYE_HEIGHT = 2; // meters above the ground when standing
const MAX_PITCH = (85 * Math.PI) / 180; // how far the standing camera looks up or down
const DOWNHILL_DISTANCE = 500; // meters: where standOn compares the ground around

/** Preset 3: stand on the Moon at `position`, facing downhill, free to look around. */
async function standOn(Cesium, viewer, position) {
  const point = Cesium.Cartographic.fromCartesian(position);
  const pickedHeight = point.height;
  // Ground in 8 directions around the point: facing uphill, the slope fills the view.
  const enu = Cesium.Transforms.eastNorthUpToFixedFrame(position);
  const around = Array.from({ length: 8 }, (_, i) => {
    const heading = (i * Math.PI) / 4;
    const offset = new Cesium.Cartesian3(
      DOWNHILL_DISTANCE * Math.sin(heading),
      DOWNHILL_DISTANCE * Math.cos(heading),
      0,
    );
    return Cesium.Cartographic.fromCartesian(
      Cesium.Matrix4.multiplyByPoint(enu, offset, offset),
    );
  });
  // The pick used the coarse tiles of the current view: ask for the finest.
  await Cesium.sampleTerrainMostDetailed(viewer.terrainProvider, [
    point,
    ...around,
  ]).catch(() => {});
  if (viewer.isDestroyed()) return;
  point.height = (point.height ?? pickedHeight) + EYE_HEIGHT;

  let heading = viewer.camera.heading;
  let lowest = Infinity;
  around.forEach((ground, i) => {
    if (ground.height < lowest) {
      lowest = ground.height;
      heading = (i * Math.PI) / 4;
    }
  });

  setStanding(viewer, true);
  viewer.camera.flyTo({
    destination: Cesium.Cartographic.toCartesian(point),
    orientation: { heading, pitch: 0, roll: 0 },
    duration: 2,
  });
}

/** Turns the standing camera towards `target`; false if it is below the horizon. */
function lookAt(Cesium, viewer, target) {
  const { Cartesian3, Matrix4 } = Cesium;
  const position = Cartesian3.clone(viewer.camera.positionWC);
  const toLocal = Matrix4.inverseTransformation(
    Cesium.Transforms.eastNorthUpToFixedFrame(position),
    new Matrix4(),
  );
  const local = Cartesian3.normalize(
    Matrix4.multiplyByPointAsVector(
      toLocal,
      Cartesian3.subtract(target, position, new Cartesian3()),
      new Cartesian3(),
    ),
    new Cartesian3(),
  );
  const pitch = Math.asin(local.z);
  viewer.camera.flyTo({
    destination: position,
    orientation: {
      heading: Math.atan2(local.x, local.y),
      // Below the horizon: face its direction, looking straight ahead.
      pitch: Cesium.Math.clamp(pitch, 0, MAX_PITCH),
      roll: 0,
    },
    duration: 1,
  });
  return pitch > 0;
}

/** Standing turns off Cesium's camera controls; the drag handler turns the view instead. */
function setStanding(viewer, standing) {
  const controller = viewer.scene.screenSpaceCameraController;
  controller.enableRotate = !standing;
  controller.enableTranslate = !standing;
  controller.enableZoom = !standing;
  controller.enableTilt = !standing;
  controller.enableLook = !standing;
  // Otherwise the camera is pushed above the coarse tiles drawn when the
  // flight ends and stays there, tens of meters up, once finer tiles load.
  controller.enableCollisionDetection = !standing;
}

function isStanding(viewer) {
  return !viewer.scene.screenSpaceCameraController.enableRotate;
}

/** Sun's centre in the Moon-fixed frame (meters). */
function getSunPosition(Cesium, time) {
  const sun =
    Cesium.Simon1994PlanetaryPositions.computeSunPositionInEarthInertialFrame(
      time,
      new Cesium.Cartesian3(),
    );
  const moon =
    Cesium.Simon1994PlanetaryPositions.computeMoonPositionInEarthInertialFrame(
      time,
      new Cesium.Cartesian3(),
    );
  const toMoonFixed = icrfToMoonFixed(Cesium, time);
  return Cesium.Matrix3.multiplyByVector(
    toMoonFixed,
    Cesium.Cartesian3.subtract(sun, moon, sun),
    sun,
  );
}
