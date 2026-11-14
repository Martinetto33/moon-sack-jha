(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MoonViewer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoonViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const BASE = ("TURBOPACK compile-time value", "") || "";
const MOON_RADIUS = 1737400; // meters
const EARTH_RADIUS = 6371000; // meters
function MoonViewer() {
    _s();
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cesiumRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Initializing Cesium…");
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoonViewer.useEffect": ()=>{
            let disposed = false;
            ({
                "MoonViewer.useEffect": async ()=>{
                    // Must be set before Cesium loads its workers and assets.
                    window.CESIUM_BASE_URL = `${BASE}/cesium/`;
                    const Cesium = await __turbopack_context__.A("[project]/node_modules/cesium/Source/Cesium.js [app-client] (ecmascript, async loader)");
                    if (disposed) return;
                    cesiumRef.current = Cesium;
                    const viewer = new Cesium.Viewer(hostRef.current, {
                        baseLayer: false,
                        globe: false,
                        baseLayerPicker: false,
                        animation: false,
                        timeline: false,
                        geocoder: false,
                        homeButton: false,
                        sceneModePicker: false,
                        navigationHelpButton: false,
                        fullscreenButton: true,
                        infoBox: false,
                        selectionIndicator: false
                    });
                    viewerRef.current = viewer;
                    viewer.scene.screenSpaceCameraController.dampingEnabled = true;
                    viewer.scene.screenSpaceCameraController.maximumZoomVelocity = 0.1;
                    viewer.scene.screenSpaceCameraController.zoomSensitivity = 0.01;
                    const zoomCameraController = new Cesium.ScreenSpaceZoomCameraController();
                    zoomCameraController.pickWorldPosition = ({
                        "MoonViewer.useEffect": function(scene, windowPosition, result) {
                            // Pick the world position from the depth buffer
                            return scene.pickPosition(windowPosition, result);
                        }
                    })["MoonViewer.useEffect"];
                    viewer.addController(zoomCameraController);
                    viewer.scene.backgroundColor = Cesium.Color.BLACK;
                    viewer.scene.moon.show = true; // Cesium's built-in Moon, lit by the Sun
                    // Simulation clock: start at "now" and run in real time.
                    viewer.clock.currentTime = Cesium.JulianDate.now();
                    viewer.clock.multiplier = 1;
                    viewer.clock.shouldAnimate = true;
                    // Simple Earth at the origin of the Earth-fixed frame.
                    viewer.entities.add({
                        name: "Earth",
                        position: Cesium.Cartesian3.ZERO,
                        ellipsoid: {
                            radii: new Cesium.Cartesian3(EARTH_RADIUS, EARTH_RADIUS, EARTH_RADIUS),
                            material: Cesium.Color.fromCssColorString("#2b6cb0")
                        }
                    });
                    // Moon label that follows the computed Moon position.
                    viewer.entities.add({
                        name: "Moon",
                        position: new Cesium.CallbackProperty({
                            "MoonViewer.useEffect": ()=>getMoonPosition(Cesium, viewer.clock.currentTime) ?? Cesium.Cartesian3.ZERO
                        }["MoonViewer.useEffect"], false),
                        point: {
                            pixelSize: 6,
                            color: Cesium.Color.WHITE
                        },
                        label: {
                            text: "Moon",
                            font: "14px sans-serif",
                            pixelOffset: new Cesium.Cartesian2(0, -24),
                            fillColor: Cesium.Color.WHITE,
                            showBackground: true,
                            backgroundColor: Cesium.Color.fromAlpha(Cesium.Color.BLACK, 0.5)
                        }
                    });
                    // Start with the Earth–Moon system in view.
                    flyToEarthMoon(Cesium, viewer, 0);
                    setStatus("Drag to rotate · scroll to zoom · right-drag to tilt");
                }
            })["MoonViewer.useEffect"]().catch({
                "MoonViewer.useEffect": (err)=>{
                    console.error(err);
                    setStatus("Failed to load Cesium. Check the console.");
                }
            }["MoonViewer.useEffect"]);
            return ({
                "MoonViewer.useEffect": ()=>{
                    disposed = true;
                    viewerRef.current?.destroy();
                    viewerRef.current = null;
                }
            })["MoonViewer.useEffect"];
        }
    }["MoonViewer.useEffect"], []);
    const withViewer = (fn)=>{
        const viewer = viewerRef.current;
        const Cesium = cesiumRef.current;
        if (viewer && Cesium) fn(Cesium, viewer);
    };
    const togglePlay = ()=>{
        withViewer((_, viewer)=>{
            viewer.clock.shouldAnimate = !viewer.clock.shouldAnimate;
            setPaused(!viewer.clock.shouldAnimate);
        });
    };
    const setSpeed = (multiplier)=>{
        withViewer((Cesium, viewer)=>{
            viewer.clock.multiplier = multiplier;
            viewer.clock.shouldAnimate = true;
            setPaused(false);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: hostRef,
                className: "cesium-host"
            }, void 0, false, {
                fileName: "[project]/src/components/MoonViewer.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "controls",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "🌕 Moon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Real-time lunar position computed with Cesium."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>withViewer((C, v)=>flyToEarthMoon(C, v, 1)),
                        children: "🌍 Earth–Moon system"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>withViewer((C, v)=>flyToMoon(C, v, 3.5)),
                        children: "🔭 Moon orbit view"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>withViewer((C, v)=>flyToMoon(C, v, 1.15)),
                        children: "🧑‍🚀 Surface close-up"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>withViewer((C, v)=>flyToMoon(C, v, 1.15, true)),
                        children: "☀️ Sun-facing side"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: togglePlay,
                                children: paused ? "▶ Play" : "⏸ Pause"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MoonViewer.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>withViewer((C, v)=>v.clock.currentTime = C.JulianDate.now()),
                                children: "⟲ Now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MoonViewer.js",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSpeed(1),
                                children: "1×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MoonViewer.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSpeed(3600),
                                children: "1 h/s"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MoonViewer.js",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSpeed(86400),
                                children: "1 d/s"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MoonViewer.js",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MoonViewer.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MoonViewer.js",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "status",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/MoonViewer.js",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MoonViewer.js",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(MoonViewer, "qRUP5sJ6PR8W+VHAiS5wQQy7Cus=");
_c = MoonViewer;
/** Moon position in the Earth-fixed frame (meters), or undefined if unavailable. */ function getMoonPosition(Cesium, time) {
    const icrf = Cesium.Simon1994PlanetaryPositions.computeMoonPositionInEarthInertialFrame(time, new Cesium.Cartesian3());
    const rotation = Cesium.Transforms.computeIcrfToFixedMatrix(time, new Cesium.Matrix3());
    if (!rotation) return undefined;
    return Cesium.Matrix3.multiplyByVector(rotation, icrf, new Cesium.Cartesian3());
}
function flyToEarthMoon(Cesium, viewer, duration) {
    const moon = getMoonPosition(Cesium, viewer.clock.currentTime);
    if (!moon) return;
    const sphere = Cesium.BoundingSphere.fromPoints([
        Cesium.Cartesian3.ZERO,
        moon
    ]);
    viewer.camera.flyToBoundingSphere(sphere, {
        duration
    });
}
/**
 * @param {number} distanceFactor  multiples of the Moon's radius from its centre
 * @param {boolean} sunFacing      if true, place the camera on the Sun side
 */ function flyToMoon(Cesium, viewer, distanceFactor, sunFacing = false) {
    const moon = getMoonPosition(Cesium, viewer.clock.currentTime);
    if (!moon) return;
    const sphere = new Cesium.BoundingSphere(moon, MOON_RADIUS * distanceFactor);
    viewer.camera.flyToBoundingSphere(sphere, {
        duration: 2
    });
    if (sunFacing) {
        // Rotate the view toward the Sun after the fly-to completes.
        setTimeout(()=>{
            const sun = Cesium.Simon1994PlanetaryPositions.computeSunPositionInEarthInertialFrame(viewer.clock.currentTime, new Cesium.Cartesian3());
            const rot = Cesium.Transforms.computeIcrfToFixedMatrix(viewer.clock.currentTime, new Cesium.Matrix3());
            if (!rot) return;
            const sunFixed = Cesium.Matrix3.multiplyByVector(rot, sun, new Cesium.Cartesian3());
            const toMoon = Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(moon, sunFixed, new Cesium.Cartesian3()), new Cesium.Cartesian3());
            const sunSideCamera = Cesium.Cartesian3.add(moon, Cesium.Cartesian3.multiplyByScalar(toMoon, -MOON_RADIUS * distanceFactor, new Cesium.Cartesian3()), new Cesium.Cartesian3());
            viewer.camera.setView({
                destination: sunSideCamera,
                orientation: {
                    direction: Cesium.Cartesian3.negate(toMoon, new Cesium.Cartesian3()),
                    up: Cesium.Cartesian3.UNIT_Z
                }
            });
        }, 2100);
    }
}
var _c;
__turbopack_context__.k.register(_c, "MoonViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MoonViewer.js [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MoonViewer.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_MoonViewer_00yjizcmv-nj_.js.map