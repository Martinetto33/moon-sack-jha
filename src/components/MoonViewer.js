"use client";

import { useEffect, useRef, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MOON_RADIUS = 1737400; // meters
const EARTH_RADIUS = 6371000; // meters
// NASA Moon Trek services, the same ones its own 3D globe uses.
const MOON_TREK_WAC_MOSAIC =
  "https://trek.nasa.gov/tiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg";
const MOON_TREK_TERRAIN = "https://marshub.s3.amazonaws.com/moon_v14/";

export default function MoonViewer() {
  const hostRef = useRef(null);
  const viewerRef = useRef(null);
  const cesiumRef = useRef(null);
  const [status, setStatus] = useState("Initializing Cesium…");
  const [paused, setPaused] = useState(false);

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
          credit: "LROC WAC mosaic: NASA/GSFC/Arizona State University, via NASA Moon Trek",
        }),
      );

      viewer.scene.backgroundColor = Cesium.Color.BLACK;
      viewer.scene.globe.enableLighting = true;
      viewer.scene.globe.showGroundAtmosphere = false;

      // Simulation clock: start at "now" and run in real time.
      viewer.clock.currentTime = Cesium.JulianDate.now();
      viewer.clock.multiplier = 1;
      viewer.clock.shouldAnimate = true;

      // Earth orbiting the Moon, with its real orientation. It is a Primitive
      // moved through its modelMatrix: a moving ellipsoid entity renders white
      // in Cesium 1.147, because its image material is recreated every frame.
      const earthAppearance = new Cesium.MaterialAppearance({
        material: Cesium.Material.fromType("Image", {
          image: `${BASE}/textures/earth-texture.jpg`,
        }),
        closed: true,
      });
      const earth = viewer.scene.primitives.add(
        new Cesium.Primitive({
          geometryInstances: new Cesium.GeometryInstance({
            geometry: new Cesium.EllipsoidGeometry({
              radii: new Cesium.Cartesian3(
                EARTH_RADIUS,
                EARTH_RADIUS,
                EARTH_RADIUS,
              ),
              vertexFormat: earthAppearance.vertexFormat,
            }),
          }),
          appearance: earthAppearance,
        }),
      );
      viewer.scene.preUpdate.addEventListener((_, time) => {
        earth.modelMatrix = Cesium.Matrix4.fromRotationTranslation(
          getEarthOrientation(Cesium, time),
          getEarthPosition(Cesium, time),
          earth.modelMatrix,
        );
      });

      // Start with the Earth–Moon system in view.
      flyToEarthMoon(Cesium, viewer, 0);
      setStatus("Drag to rotate · scroll to zoom · right-drag to tilt");
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

  return (
    <>
      <div ref={hostRef} className="cesium-host" />

      <div className="controls">
        <h1>🌕 Moon</h1>
        <p>Real-time lunar position computed with Cesium.</p>

        <button onClick={() => withViewer((C, v) => flyToEarthMoon(C, v, 1))}>
          🌍 Earth–Moon system
        </button>
        <button onClick={() => withViewer((C, v) => flyToMoon(C, v, 3.5))}>
          🔭 Moon orbit view
        </button>
        <button onClick={() => withViewer((C, v) => flyToMoon(C, v, 1.15))}>
          🧑‍🚀 Surface close-up
        </button>
        <button
          onClick={() => withViewer((C, v) => flyToMoon(C, v, 1.15, true))}
        >
          ☀️ Sun-facing side
        </button>

        <div className="row">
          <button onClick={togglePlay}>{paused ? "▶ Play" : "⏸ Pause"}</button>
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
      </div>

      <div className="status">{status}</div>
    </>
  );
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

function flyToEarthMoon(Cesium, viewer, duration) {
  const sphere = Cesium.BoundingSphere.fromPoints([
    Cesium.Cartesian3.ZERO,
    getEarthPosition(Cesium, viewer.clock.currentTime),
  ]);
  viewer.camera.flyToBoundingSphere(sphere, { duration });
}

/**
 * Looks at the Moon from the Earth side, or from the Sun side.
 * @param {number} distanceFactor  a sphere this many Moon radii wide fills the view
 * @param {boolean} sunFacing      if true, place the camera on the Sun side
 */
function flyToMoon(Cesium, viewer, distanceFactor, sunFacing = false) {
  const time = viewer.clock.currentTime;
  const from = Cesium.Cartesian3.normalize(
    sunFacing ? getSunPosition(Cesium, time) : getEarthPosition(Cesium, time),
    new Cesium.Cartesian3(),
  );
  // Same framing as flyToBoundingSphere: fit the narrower field of view.
  const { fovy, aspectRatio } = viewer.camera.frustum;
  const distance =
    (MOON_RADIUS * distanceFactor) /
    (Math.tan(fovy / 2) * Math.min(1, aspectRatio));

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
