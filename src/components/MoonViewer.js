"use client";

import { useEffect, useRef, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MOON_RADIUS = 1737400; // meters
const EARTH_RADIUS = 6371000; // meters

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

      const viewer = new Cesium.Viewer(hostRef.current, {
        baseLayer: false, // no Earth imagery: no Ion token required
        globe: false, // we draw our own Earth sphere below
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

      viewer.scene.screenSpaceCameraController.dampingEnabled = true;
      viewer.scene.screenSpaceCameraController.maximumZoomVelocity = 0.1;
      viewer.scene.screenSpaceCameraController.zoomSensitivity = 0.01;

      const zoomCameraController = new Cesium.ScreenSpaceZoomCameraController();
      zoomCameraController.pickWorldPosition = function (
        scene,
        windowPosition,
        result,
      ) {
        // Pick the world position from the depth buffer
        return scene.pickPosition(windowPosition, result);
      };
      viewer.addController(zoomCameraController);

      viewer.scene.backgroundColor = Cesium.Color.BLACK;
      viewer.scene.moon.show = false; // hide the built-in low-res Moon

      viewer.entities.add({
        name: "Moon Surface",
        position: new Cesium.CallbackProperty(
          () =>
            getMoonPosition(Cesium, viewer.clock.currentTime) ??
            Cesium.Cartesian3.ZERO,
          false,
        ),
        ellipsoid: {
          radii: new Cesium.Cartesian3(MOON_RADIUS, MOON_RADIUS, MOON_RADIUS),
          material: new Cesium.ImageMaterialProperty({
            image: `${BASE}/textures/moon.jpg`,
            transparent: false,
          }),
        },
      });

      // Simulation clock: start at "now" and run in real time.
      viewer.clock.currentTime = Cesium.JulianDate.now();
      viewer.clock.multiplier = 1;
      viewer.clock.shouldAnimate = true;

      // Simple Earth at the origin of the Earth-fixed frame.
      viewer.entities.add({
        name: "Earth",
        position: Cesium.Cartesian3.ZERO,
        ellipsoid: {
          radii: new Cesium.Cartesian3(
            EARTH_RADIUS,
            EARTH_RADIUS,
            EARTH_RADIUS,
          ),
          material: new Cesium.ImageMaterialProperty({
            image: `${BASE}/textures/earth-texture.jpg`,
            transparent: false,
          }),
        },
      });

      // Moon label that follows the computed Moon position.
      viewer.entities.add({
        name: "Moon",
        position: new Cesium.CallbackProperty(
          () =>
            getMoonPosition(Cesium, viewer.clock.currentTime) ??
            Cesium.Cartesian3.ZERO,
          false,
        ),
        point: { pixelSize: 6, color: Cesium.Color.WHITE },
        label: {
          text: "Moon",
          font: "14px sans-serif",
          pixelOffset: new Cesium.Cartesian2(0, -24),
          fillColor: Cesium.Color.WHITE,
          showBackground: true,
          backgroundColor: Cesium.Color.fromAlpha(Cesium.Color.BLACK, 0.5),
        },
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

/** Moon position in the Earth-fixed frame (meters), or undefined if unavailable. */
function getMoonPosition(Cesium, time) {
  const icrf =
    Cesium.Simon1994PlanetaryPositions.computeMoonPositionInEarthInertialFrame(
      time,
      new Cesium.Cartesian3(),
    );
  const rotation = Cesium.Transforms.computeIcrfToFixedMatrix(
    time,
    new Cesium.Matrix3(),
  );
  if (!rotation) return undefined;
  return Cesium.Matrix3.multiplyByVector(
    rotation,
    icrf,
    new Cesium.Cartesian3(),
  );
}

function flyToEarthMoon(Cesium, viewer, duration) {
  const moon = getMoonPosition(Cesium, viewer.clock.currentTime);
  if (!moon) return;
  const sphere = Cesium.BoundingSphere.fromPoints([
    Cesium.Cartesian3.ZERO,
    moon,
  ]);
  viewer.camera.flyToBoundingSphere(sphere, { duration });
}

/**
 * @param {number} distanceFactor  multiples of the Moon's radius from its centre
 * @param {boolean} sunFacing      if true, place the camera on the Sun side
 */
function flyToMoon(Cesium, viewer, distanceFactor, sunFacing = false) {
  const moon = getMoonPosition(Cesium, viewer.clock.currentTime);
  if (!moon) return;

  const sphere = new Cesium.BoundingSphere(moon, MOON_RADIUS * distanceFactor);
  viewer.camera.flyToBoundingSphere(sphere, { duration: 2 });

  if (sunFacing) {
    // Rotate the view toward the Sun after the fly-to completes.
    setTimeout(() => {
      const sun =
        Cesium.Simon1994PlanetaryPositions.computeSunPositionInEarthInertialFrame(
          viewer.clock.currentTime,
          new Cesium.Cartesian3(),
        );
      const rot = Cesium.Transforms.computeIcrfToFixedMatrix(
        viewer.clock.currentTime,
        new Cesium.Matrix3(),
      );
      if (!rot) return;
      const sunFixed = Cesium.Matrix3.multiplyByVector(
        rot,
        sun,
        new Cesium.Cartesian3(),
      );
      const toMoon = Cesium.Cartesian3.normalize(
        Cesium.Cartesian3.subtract(moon, sunFixed, new Cesium.Cartesian3()),
        new Cesium.Cartesian3(),
      );
      const sunSideCamera = Cesium.Cartesian3.add(
        moon,
        Cesium.Cartesian3.multiplyByScalar(
          toMoon,
          -MOON_RADIUS * distanceFactor,
          new Cesium.Cartesian3(),
        ),
        new Cesium.Cartesian3(),
      );
      viewer.camera.setView({
        destination: sunSideCamera,
        orientation: {
          direction: Cesium.Cartesian3.negate(toMoon, new Cesium.Cartesian3()),
          up: Cesium.Cartesian3.UNIT_Z,
        },
      });
    }, 2100);
  }
}
