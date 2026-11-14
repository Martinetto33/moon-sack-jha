(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@cesium/engine/Source/Scene/ScreenSpaceCameraController.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Cartesian2.js [app-client] (ecmascript) <export default as Cartesian2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Cartesian3.js [app-client] (ecmascript) <export default as Cartesian3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian4$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Cartesian4.js [app-client] (ecmascript) <export default as Cartesian4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Cartographic.js [app-client] (ecmascript) <export default as Cartographic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$DeveloperError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeveloperError$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/DeveloperError.js [app-client] (ecmascript) <export default as DeveloperError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Ellipsoid.js [app-client] (ecmascript) <export default as Ellipsoid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/FixedFrameTransforms.js [app-client] (ecmascript) <export default as FixedFrameTransforms>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$HeadingPitchRoll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingPitchRoll$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/HeadingPitchRoll.js [app-client] (ecmascript) <export default as HeadingPitchRoll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/IntersectionTests.js [app-client] (ecmascript) <export default as IntersectionTests>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Math.js [app-client] (ecmascript) <export default as Math>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Matrix3.js [app-client] (ecmascript) <export default as Matrix3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Matrix4.js [app-client] (ecmascript) <export default as Matrix4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$OrthographicFrustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OrthographicFrustum$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/OrthographicFrustum.js [app-client] (ecmascript) <export default as OrthographicFrustum>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Quaternion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quaternion$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Quaternion.js [app-client] (ecmascript) <export default as Quaternion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/Ray.js [app-client] (ecmascript) <export default as Ray>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$VerticalExaggeration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalExaggeration$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/VerticalExaggeration.js [app-client] (ecmascript) <export default as VerticalExaggeration>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/defined.js [app-client] (ecmascript) <export default as defined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$destroyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__destroyObject$3e$__ = __turbopack_context__.i("[project]/node_modules/@cesium/core/Source/destroyObject.js [app-client] (ecmascript) <export default as destroyObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$KeyboardEventModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Core/KeyboardEventModifier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventAggregator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/CameraEventAggregator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/CameraEventType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$MapMode2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/MapMode2D.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/SceneMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/SceneTransforms.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$TweenCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@cesium/engine/Source/Scene/TweenCollection.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Modifies the camera position and orientation based on mouse input to a canvas.
 * @alias ScreenSpaceCameraController
 * @constructor
 *
 * @param {Scene} scene The scene.
 */ function ScreenSpaceCameraController(scene) {
    //>>includeStart('debug', pragmas.debug);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(scene)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$DeveloperError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeveloperError$3e$__["DeveloperError"]("scene is required.");
    }
    //>>includeEnd('debug');
    /**
   * If true, inputs are allowed conditionally with the flags enableTranslate, enableZoom,
   * enableRotate, enableTilt, and enableLook.  If false, all inputs are disabled.
   *
   * NOTE: This setting is for temporary use cases, such as camera flights and
   * drag-selection of regions (see Picking demo).  It is typically set to false at the
   * start of such events, and set true on completion.  To keep inputs disabled
   * past the end of camera flights, you must use the other booleans (enableTranslate,
   * enableZoom, enableRotate, enableTilt, and enableLook).
   * @type {boolean}
   * @default true
   */ this.enableInputs = true;
    /**
   * If true, allows the user to pan around the map.  If false, the camera stays locked at the current position.
   * This flag only applies in 2D and Columbus view modes.
   * @type {boolean}
   * @default true
   */ this.enableTranslate = true;
    /**
   * If true, allows the user to zoom in and out.  If false, the camera is locked to the current distance from the ellipsoid.
   * @type {boolean}
   * @default true
   */ this.enableZoom = true;
    /**
   * If true, allows the user to rotate the world which translates the user's position.
   * This flag only applies in 2D and 3D.
   * @type {boolean}
   * @default true
   */ this.enableRotate = true;
    /**
   * If true, allows the user to tilt the camera.  If false, the camera is locked to the current heading.
   * This flag only applies in 3D and Columbus view.
   * @type {boolean}
   * @default true
   */ this.enableTilt = true;
    /**
   * If true, allows the user to use free-look. If false, the camera view direction can only be changed through translating
   * or rotating. This flag only applies in 3D and Columbus view modes.
   * @type {boolean}
   * @default true
   */ this.enableLook = true;
    /**
   * A parameter in the range <code>[0, 1)</code> used to determine how long
   * the camera will continue to spin because of inertia.
   * With value of zero, the camera will have no inertia.
   * @type {number}
   * @default 0.9
   */ this.inertiaSpin = 0.9;
    /**
   * A parameter in the range <code>[0, 1)</code> used to determine how long
   * the camera will continue to translate because of inertia.
   * With value of zero, the camera will have no inertia.
   * @type {number}
   * @default 0.9
   */ this.inertiaTranslate = 0.9;
    /**
   * A parameter in the range <code>[0, 1)</code> used to determine how long
   * the camera will continue to zoom because of inertia.
   * With value of zero, the camera will have no inertia.
   * @type {number}
   * @default 0.8
   */ this.inertiaZoom = 0.8;
    /**
   * A parameter in the range <code>[0, 1)</code> used to limit the range
   * of various user inputs to a percentage of the window width/height per animation frame.
   * This helps keep the camera under control in low-frame-rate situations.
   * @type {number}
   * @default 0.1
   */ this.maximumMovementRatio = 0.1;
    /**
   * Sets the duration, in seconds, of the bounce back animations in 2D and Columbus view.
   * @type {number}
   * @default 3.0
   */ this.bounceAnimationTime = 3.0;
    /**
   * The minimum magnitude, in meters, of the camera position when zooming. Defaults to 1.0.
   * @type {number}
   * @default 1.0
   */ this.minimumZoomDistance = 1.0;
    /**
   * The maximum magnitude, in meters, of the camera position when zooming. Defaults to positive infinity.
   * @type {number}
   * @default {@link Number.POSITIVE_INFINITY}
   */ this.maximumZoomDistance = Number.POSITIVE_INFINITY;
    /**
   * A multiplier for the speed at which the camera will zoom.
   * @type {number}
   * @default 5.0
   */ this.zoomFactor = 5.0;
    /**
   * The input that allows the user to pan around the map. This only applies in 2D and Columbus view modes.
   * <p>
   * The type can be a {@link CameraEventType}, <code>undefined</code>, an object with <code>eventType</code>
   * and <code>modifier</code> properties with types <code>CameraEventType</code> and {@link KeyboardEventModifier},
   * or an array of any of the preceding.
   * </p>
   * @type {CameraEventType|Array|undefined}
   * @default {@link CameraEventType.LEFT_DRAG}
   */ this.translateEventTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT_DRAG;
    /**
   * The input that allows the user to zoom in/out.
   * <p>
   * The type can be a {@link CameraEventType}, <code>undefined</code>, an object with <code>eventType</code>
   * and <code>modifier</code> properties with types <code>CameraEventType</code> and {@link KeyboardEventModifier},
   * or an array of any of the preceding.
   * </p>
   * @type {CameraEventType|Array|undefined}
   * @default [{@link CameraEventType.RIGHT_DRAG}, {@link CameraEventType.WHEEL}, {@link CameraEventType.PINCH}]
   */ this.zoomEventTypes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RIGHT_DRAG,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].WHEEL,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PINCH
    ];
    /**
   * The input that allows the user to rotate around the globe or another object. This only applies in 3D and Columbus view modes.
   * <p>
   * The type can be a {@link CameraEventType}, <code>undefined</code>, an object with <code>eventType</code>
   * and <code>modifier</code> properties with types <code>CameraEventType</code> and {@link KeyboardEventModifier},
   * or an array of any of the preceding.
   * </p>
   * @type {CameraEventType|Array|undefined}
   * @default {@link CameraEventType.LEFT_DRAG}
   */ this.rotateEventTypes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT_DRAG;
    /**
   * The input that allows the user to tilt in 3D and Columbus view or twist in 2D.
   * <p>
   * The type can be a {@link CameraEventType}, <code>undefined</code>, an object with <code>eventType</code>
   * and <code>modifier</code> properties with types <code>CameraEventType</code> and {@link KeyboardEventModifier},
   * or an array of any of the preceding.
   * </p>
   * @type {CameraEventType|Array|undefined}
   * @default [{@link CameraEventType.MIDDLE_DRAG}, {@link CameraEventType.PINCH}, {
   *     eventType : {@link CameraEventType.LEFT_DRAG},
   *     modifier : {@link KeyboardEventModifier.CTRL}
   * }, {
   *     eventType : {@link CameraEventType.RIGHT_DRAG},
   *     modifier : {@link KeyboardEventModifier.CTRL}
   * }]
   */ this.tiltEventTypes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].MIDDLE_DRAG,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].PINCH,
        {
            eventType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT_DRAG,
            modifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$KeyboardEventModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CTRL
        },
        {
            eventType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].RIGHT_DRAG,
            modifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$KeyboardEventModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CTRL
        }
    ];
    /**
   * The input that allows the user to change the direction the camera is viewing. This only applies in 3D and Columbus view modes.
   * <p>
   * The type can be a {@link CameraEventType}, <code>undefined</code>, an object with <code>eventType</code>
   * and <code>modifier</code> properties with types <code>CameraEventType</code> and {@link KeyboardEventModifier},
   * or an array of any of the preceding.
   * </p>
   * @type {CameraEventType|Array|undefined}
   * @default { eventType : {@link CameraEventType.LEFT_DRAG}, modifier : {@link KeyboardEventModifier.SHIFT} }
   */ this.lookEventTypes = {
        eventType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].LEFT_DRAG,
        modifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Core$2f$KeyboardEventModifier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SHIFT
    };
    const ellipsoid = scene.ellipsoid ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].default;
    /**
   * The minimum height the camera must be before picking the terrain or scene content instead of the ellipsoid. Defaults to scene.ellipsoid.minimumRadius * 0.025 when another ellipsoid than WGS84 is used.
   * @type {number}
   * @default 150000.0 or scene.ellipsoid.minimumRadius * 0.025
   */ this.minimumPickingTerrainHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].WGS84.equals(ellipsoid) ? 150000.0 : ellipsoid.minimumRadius * 0.025;
    this._minimumPickingTerrainHeight = this.minimumPickingTerrainHeight;
    /**
   * The minimum distance the camera must be before testing for collision with terrain when zoom with inertia. Default to scene.ellipsoid.minimumRadius * 0.00063 when another ellipsoid than WGS84 is used.
   * @type {number}
   * @default 4000.0 or scene.ellipsoid.minimumRadius * 0.00063
   */ this.minimumPickingTerrainDistanceWithInertia = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].WGS84.equals(ellipsoid) ? 4000.0 : ellipsoid.minimumRadius * 0.00063;
    /**
   * The minimum height the camera must be before testing for collision with terrain. Default to scene.ellipsoid.minimumRadius * 0.0025 when another ellipsoid than WGS84 is used.
   * @type {number}
   * @default 15000.0 or scene.ellipsoid.minimumRadius * 0.0025.
   */ this.minimumCollisionTerrainHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].WGS84.equals(ellipsoid) ? 15000.0 : ellipsoid.minimumRadius * 0.0025;
    this._minimumCollisionTerrainHeight = this.minimumCollisionTerrainHeight;
    /**
   * The minimum height the camera must be before switching from rotating a track ball to
   * free look when clicks originate on the sky or in space. Defaults to ellipsoid.minimumRadius * 1.175 when another ellipsoid than WGS84 is used.
   * @type {number}
   * @default 7500000.0 or scene.ellipsoid.minimumRadius * 1.175
   */ this.minimumTrackBallHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].WGS84.equals(ellipsoid) ? 7500000.0 : ellipsoid.minimumRadius * 1.175;
    this._minimumTrackBallHeight = this.minimumTrackBallHeight;
    /**
   * When disabled, the values of <code>maximumZoomDistance</code> and <code>minimumZoomDistance</code> are ignored.
   * Also used in conjunction with {@link Cesium3DTileset#enableCollision} to prevent the camera from moving through or below a 3D Tileset surface.
   * This may also affect clamping behavior when using {@link HeightReference.CLAMP_TO_GROUND} on 3D Tiles.
   * @type {boolean}
   * @default true
   */ this.enableCollisionDetection = true;
    /**
   * The angle, relative to the ellipsoid normal, restricting the maximum amount that the user can tilt the camera. If <code>undefined</code>, the angle of the camera tilt is unrestricted.
   * @type {number|undefined}
   * @default undefined
   *
   * @example
   * // Prevent the camera from tilting below the ellipsoid surface
   * viewer.scene.screenSpaceCameraController.maximumTiltAngle = Math.PI / 2.0;
   */ this.maximumTiltAngle = undefined;
    this._scene = scene;
    this._globe = undefined;
    this._ellipsoid = ellipsoid;
    this._lastGlobeHeight = 0.0;
    this._aggregator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$CameraEventAggregator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](scene.canvas);
    this._lastInertiaSpinMovement = undefined;
    this._lastInertiaZoomMovement = undefined;
    this._lastInertiaTranslateMovement = undefined;
    this._lastInertiaTiltMovement = undefined;
    // Zoom disables tilt, spin, and translate inertia
    // Tilt disables spin and translate inertia
    this._inertiaDisablers = {
        _lastInertiaZoomMovement: [
            "_lastInertiaSpinMovement",
            "_lastInertiaTranslateMovement",
            "_lastInertiaTiltMovement"
        ],
        _lastInertiaTiltMovement: [
            "_lastInertiaSpinMovement",
            "_lastInertiaTranslateMovement"
        ]
    };
    this._tweens = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$TweenCollection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    this._tween = undefined;
    this._horizontalRotationAxis = undefined;
    this._tiltCenterMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](-1.0, -1.0);
    this._tiltCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
    this._rotateMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](-1.0, -1.0);
    this._rotateStartPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
    this._strafeStartPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
    this._strafeMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
    this._strafeEndMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
    this._zoomMouseStart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](-1.0, -1.0);
    this._zoomWorldPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
    this._useZoomWorldPosition = false;
    this._panLastMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
    this._panLastWorldPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
    this._tiltCVOffMap = false;
    this._looking = false;
    this._rotating = false;
    this._strafing = false;
    this._zoomingOnVector = false;
    this._zoomingUnderground = false;
    this._rotatingZoom = false;
    this._adjustedHeightForTerrain = false;
    this._cameraUnderground = false;
    const projection = scene.mapProjection;
    this._maxCoord = projection.project(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"](Math.PI, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].PI_OVER_TWO));
    // Constants, Make any of these public?
    this._rotateFactor = undefined;
    this._rotateRateRangeAdjustment = undefined;
    this._maximumRotateRate = 1.77;
    this._minimumRotateRate = 1.0 / 5000.0;
    this._minimumZoomRate = 20.0;
    this._maximumZoomRate = 5906376272000.0; // distance from the Sun to Pluto in meters.
    this._minimumUndergroundPickDistance = 2000.0;
    this._maximumUndergroundPickDistance = 10000.0;
}
function decay(time, coefficient) {
    if (time < 0) {
        return 0.0;
    }
    const tau = (1.0 - coefficient) * 25.0;
    return Math.exp(-tau * time);
}
function sameMousePosition(movement) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equalsEpsilon(movement.startPosition, movement.endPosition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON14);
}
// If the time between mouse down and mouse up is not between
// these thresholds, the camera will not move with inertia.
// This value is probably dependent on the browser and/or the
// hardware. Should be investigated further.
const inertiaMaxClickTimeThreshold = 0.4;
function maintainInertia(aggregator, type, modifier, decayCoef, action, object, lastMovementName) {
    let movementState = object[lastMovementName];
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movementState)) {
        movementState = object[lastMovementName] = {
            startPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](),
            endPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](),
            motion: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"](),
            inertiaEnabled: true
        };
    }
    const ts = aggregator.getButtonPressTime(type, modifier);
    const tr = aggregator.getButtonReleaseTime(type, modifier);
    const threshold = ts && tr && (tr.getTime() - ts.getTime()) / 1000.0;
    const now = new Date();
    const fromNow = tr && (now.getTime() - tr.getTime()) / 1000.0;
    if (ts && tr && threshold < inertiaMaxClickTimeThreshold) {
        const d = decay(fromNow, decayCoef);
        const lastMovement = aggregator.getLastMovement(type, modifier);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(lastMovement) || sameMousePosition(lastMovement) || !movementState.inertiaEnabled) {
            return;
        }
        movementState.motion.x = (lastMovement.endPosition.x - lastMovement.startPosition.x) * 0.5;
        movementState.motion.y = (lastMovement.endPosition.y - lastMovement.startPosition.y) * 0.5;
        movementState.startPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(lastMovement.startPosition, movementState.startPosition);
        movementState.endPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].multiplyByScalar(movementState.motion, d, movementState.endPosition);
        movementState.endPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].add(movementState.startPosition, movementState.endPosition, movementState.endPosition);
        // If value from the decreasing exponential function is close to zero,
        // the end coordinates may be NaN.
        if (isNaN(movementState.endPosition.x) || isNaN(movementState.endPosition.y) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].distance(movementState.startPosition, movementState.endPosition) < 0.5) {
            return;
        }
        if (!aggregator.isButtonDown(type, modifier)) {
            const startPosition = aggregator.getStartMousePosition(type, modifier);
            action(object, startPosition, movementState);
        }
    }
}
function activateInertia(controller, inertiaStateName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(inertiaStateName)) {
        // Re-enable inertia if it was disabled
        let movementState = controller[inertiaStateName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movementState)) {
            movementState.inertiaEnabled = true;
        }
        // Disable inertia on other movements
        const inertiasToDisable = controller._inertiaDisablers[inertiaStateName];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(inertiasToDisable)) {
            const length = inertiasToDisable.length;
            for(let i = 0; i < length; ++i){
                movementState = controller[inertiasToDisable[i]];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movementState)) {
                    movementState.inertiaEnabled = false;
                }
            }
        }
    }
}
const scratchEventTypeArray = [];
function reactToInput(controller, enabled, eventTypes, action, inertiaConstant, inertiaStateName) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(eventTypes)) {
        return;
    }
    const aggregator = controller._aggregator;
    if (!Array.isArray(eventTypes)) {
        scratchEventTypeArray[0] = eventTypes;
        eventTypes = scratchEventTypeArray;
    }
    const length = eventTypes.length;
    for(let i = 0; i < length; ++i){
        const eventType = eventTypes[i];
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(eventType.eventType) ? eventType.eventType : eventType;
        const modifier = eventType.modifier;
        const movement = aggregator.isMoving(type, modifier) && aggregator.getMovement(type, modifier);
        const startPosition = aggregator.getStartMousePosition(type, modifier);
        if (controller.enableInputs && enabled) {
            if (movement) {
                action(controller, startPosition, movement);
                activateInertia(controller, inertiaStateName);
            } else if (inertiaConstant < 1.0) {
                maintainInertia(aggregator, type, modifier, inertiaConstant, action, controller, inertiaStateName);
            }
        }
    }
}
const scratchZoomPickRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const scratchPickCartesian = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchZoomOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const scratchZoomDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCenterPixel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const scratchCenterPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchPositionNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchPickNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchZoomAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCameraPositionNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
// Scratch variables used in zooming algorithm
const scratchTargetNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCameraPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCameraUpNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCameraRightNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchForwardNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchPositionToTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchPositionToTargetNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchPan = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCenterMovement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCartesian = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCartesianTwo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCartesianThree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchZoomViewOptions = {
    orientation: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$HeadingPitchRoll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeadingPitchRoll$3e$__["HeadingPitchRoll"]()
};
function handleZoom(object, startPosition, movement, zoomFactor, distanceMeasure, unitPositionDotDirection) {
    let percentage = 1.0;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(unitPositionDotDirection)) {
        percentage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].clamp(Math.abs(unitPositionDotDirection), 0.25, 1.0);
    }
    const diff = movement.endPosition.y - movement.startPosition.y;
    // distanceMeasure should be the height above the ellipsoid.
    // When approaching the surface, the zoomRate slows and stops minimumZoomDistance above it.
    const approachingSurface = diff > 0;
    const minHeight = approachingSurface ? object.minimumZoomDistance * percentage : 0;
    const maxHeight = object.maximumZoomDistance;
    const minDistance = distanceMeasure - minHeight;
    let zoomRate = zoomFactor * minDistance;
    zoomRate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].clamp(zoomRate, object._minimumZoomRate, object._maximumZoomRate);
    let rangeWindowRatio = diff / object._scene.canvas.clientHeight;
    rangeWindowRatio = Math.min(rangeWindowRatio, object.maximumMovementRatio);
    let distance = zoomRate * rangeWindowRatio;
    if (object.enableCollisionDetection || object.minimumZoomDistance === 0.0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(object._globe) // look-at mode
    ) {
        if (distance > 0.0 && Math.abs(distanceMeasure - minHeight) < 1.0) {
            return;
        }
        if (distance < 0.0 && Math.abs(distanceMeasure - maxHeight) < 1.0) {
            return;
        }
        if (distanceMeasure - distance < minHeight) {
            distance = distanceMeasure - minHeight - 1.0;
        } else if (distanceMeasure - distance > maxHeight) {
            distance = distanceMeasure - maxHeight;
        }
    }
    const scene = object._scene;
    const camera = scene.camera;
    const mode = scene.mode;
    const orientation = scratchZoomViewOptions.orientation;
    orientation.heading = camera.heading;
    orientation.pitch = camera.pitch;
    orientation.roll = camera.roll;
    const sameStartPosition = movement.inertiaEnabled ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, object._zoomMouseStart);
    let zoomingOnVector = object._zoomingOnVector;
    let rotatingZoom = object._rotatingZoom;
    let pickedPosition;
    if (!sameStartPosition) {
        object._zoomMouseStart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, object._zoomMouseStart);
        // When camera transform is set, such as tracking an entity, object._globe will be undefined, and no position should be picked
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(object._globe) && mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE2D) {
            pickedPosition = camera.getPickRay(startPosition, scratchZoomPickRay).origin;
            pickedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(pickedPosition.y, pickedPosition.z, pickedPosition.x);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(object._globe)) {
            pickedPosition = pickPosition(object, startPosition, scratchPickCartesian);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(pickedPosition)) {
            object._useZoomWorldPosition = true;
            object._zoomWorldPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(pickedPosition, object._zoomWorldPosition);
        } else {
            object._useZoomWorldPosition = false;
        }
        zoomingOnVector = object._zoomingOnVector = false;
        rotatingZoom = object._rotatingZoom = false;
        object._zoomingUnderground = object._cameraUnderground;
    }
    if (!object._useZoomWorldPosition) {
        camera.zoomIn(distance);
        return;
    }
    let zoomOnVector = mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW;
    if (camera.positionCartographic.height < 2000000) {
        rotatingZoom = true;
    }
    if (!sameStartPosition || rotatingZoom) {
        if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE2D) {
            const worldPosition = object._zoomWorldPosition;
            const endPosition = camera.position;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(worldPosition, endPosition) && camera.positionCartographic.height < object._maxCoord.x * 2.0) {
                const savedX = camera.position.x;
                const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(worldPosition, endPosition, scratchZoomDirection);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(direction, direction);
                const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(worldPosition, endPosition) * distance / (camera.getMagnitude() * 0.5);
                camera.move(direction, d * 0.5);
                if (camera.position.x < 0.0 && savedX > 0.0 || camera.position.x > 0.0 && savedX < 0.0) {
                    pickedPosition = camera.getPickRay(startPosition, scratchZoomPickRay).origin;
                    pickedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(pickedPosition.y, pickedPosition.z, pickedPosition.x);
                    object._zoomWorldPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(pickedPosition, object._zoomWorldPosition);
                }
            }
        } else if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE3D) {
            const cameraPositionNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.position, scratchCameraPositionNormal);
            if (object._cameraUnderground || object._zoomingUnderground || camera.positionCartographic.height < 3000.0 && Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.direction, cameraPositionNormal)) < 0.6) {
                zoomOnVector = true;
            } else {
                const canvas = scene.canvas;
                const centerPixel = scratchCenterPixel;
                centerPixel.x = canvas.clientWidth / 2;
                centerPixel.y = canvas.clientHeight / 2;
                const centerPosition = pickPosition(object, centerPixel, scratchCenterPosition);
                // If centerPosition is not defined, it means the globe does not cover the center position of screen
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(centerPosition)) {
                    zoomOnVector = true;
                } else if (camera.positionCartographic.height < 1000000) {
                    // The math in the else block assumes the camera
                    // points toward the earth surface, so we check it here.
                    // Theoretically, we should check for 90 degree, but it doesn't behave well when parallel
                    // to the earth surface
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.direction, cameraPositionNormal) >= -0.5) {
                        zoomOnVector = true;
                    } else {
                        const cameraPosition = scratchCameraPosition;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.position, cameraPosition);
                        const target = object._zoomWorldPosition;
                        let targetNormal = scratchTargetNormal;
                        targetNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(target, targetNormal);
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(targetNormal, cameraPositionNormal) < 0.0) {
                            return;
                        }
                        const center = scratchCenter;
                        const forward = scratchForwardNormal;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.direction, forward);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(cameraPosition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(forward, 1000, scratchCartesian), center);
                        const positionToTarget = scratchPositionToTarget;
                        const positionToTargetNormal = scratchPositionToTargetNormal;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(target, cameraPosition, positionToTarget);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(positionToTarget, positionToTargetNormal);
                        const alphaDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(cameraPositionNormal, positionToTargetNormal);
                        if (alphaDot >= 0.0) {
                            // We zoomed past the target, and this zoom is not valid anymore.
                            // This line causes the next zoom movement to pick a new starting point.
                            object._zoomMouseStart.x = -1;
                            return;
                        }
                        const alpha = Math.acos(-alphaDot);
                        const cameraDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(cameraPosition);
                        const targetDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(target);
                        const remainingDistance = cameraDistance - distance;
                        const positionToTargetDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(positionToTarget);
                        const gamma = Math.asin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].clamp(positionToTargetDistance / targetDistance * Math.sin(alpha), -1.0, 1.0));
                        const delta = Math.asin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].clamp(remainingDistance / targetDistance * Math.sin(alpha), -1.0, 1.0));
                        const beta = gamma - delta + alpha;
                        const up = scratchCameraUpNormal;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(cameraPosition, up);
                        let right = scratchCameraRightNormal;
                        right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(positionToTargetNormal, up, right);
                        right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(right, right);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(up, right, scratchCartesian), forward);
                        // Calculate new position to move to
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(center, scratchCartesian), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(center) - distance, center);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(cameraPosition, cameraPosition);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(cameraPosition, remainingDistance, cameraPosition);
                        // Pan
                        const pMid = scratchPan;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(up, Math.cos(beta) - 1, scratchCartesianTwo), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(forward, Math.sin(beta), scratchCartesianThree), scratchCartesian), remainingDistance, pMid);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(cameraPosition, pMid, cameraPosition);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(center, up);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(up, right, scratchCartesian), forward);
                        const cMid = scratchCenterMovement;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(up, Math.cos(beta) - 1, scratchCartesianTwo), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(forward, Math.sin(beta), scratchCartesianThree), scratchCartesian), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(center), cMid);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(center, cMid, center);
                        // Update camera
                        // Set new position
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(cameraPosition, camera.position);
                        // Set new direction
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(center, cameraPosition, scratchCartesian), camera.direction);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.direction, camera.direction);
                        // Set new right & up vectors
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.up, camera.right);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.right, camera.direction, camera.up);
                        camera.setView(scratchZoomViewOptions);
                        return;
                    }
                } else {
                    const positionNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(centerPosition, scratchPositionNormal);
                    const pickedNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(object._zoomWorldPosition, scratchPickNormal);
                    const dotProduct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(pickedNormal, positionNormal);
                    if (dotProduct > 0.0 && dotProduct < 1.0) {
                        const angle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].acosClamped(dotProduct);
                        const axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(pickedNormal, positionNormal, scratchZoomAxis);
                        const denom = Math.abs(angle) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].toRadians(20.0) ? camera.positionCartographic.height * 0.75 : camera.positionCartographic.height - distance;
                        const scalar = distance / denom;
                        camera.rotate(axis, angle * scalar);
                    }
                }
            }
        }
        object._rotatingZoom = !zoomOnVector;
    }
    if (!sameStartPosition && zoomOnVector || zoomingOnVector) {
        let ray;
        const zoomMouseStart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].worldToWindowCoordinates(scene, object._zoomWorldPosition, scratchZoomOffset);
        if (mode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, object._zoomMouseStart) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(zoomMouseStart)) {
            ray = camera.getPickRay(zoomMouseStart, scratchZoomPickRay);
        } else {
            ray = camera.getPickRay(startPosition, scratchZoomPickRay);
        }
        const rayDirection = ray.direction;
        if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW || mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE2D) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(rayDirection.y, rayDirection.z, rayDirection.x, rayDirection);
        }
        camera.move(rayDirection, distance);
        object._zoomingOnVector = true;
    } else {
        camera.zoomIn(distance);
    }
    if (!object._cameraUnderground) {
        camera.setView(scratchZoomViewOptions);
    }
}
const translate2DStart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const translate2DEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const scratchTranslateP0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function translate2D(controller, startPosition, movement) {
    const scene = controller._scene;
    const camera = scene.camera;
    let start = camera.getPickRay(movement.startPosition, translate2DStart).origin;
    let end = camera.getPickRay(movement.endPosition, translate2DEnd).origin;
    start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(start.y, start.z, start.x, start);
    end = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(end.y, end.z, end.x, end);
    const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(start, end, scratchTranslateP0);
    const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(direction);
    if (distance > 0.0) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(direction, direction);
        camera.move(direction, distance);
    }
}
function zoom2D(controller, startPosition, movement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movement.distance)) {
        movement = movement.distance;
    }
    const scene = controller._scene;
    const camera = scene.camera;
    handleZoom(controller, startPosition, movement, controller.zoomFactor, camera.getMagnitude());
}
const twist2DStart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const twist2DEnd = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
function twist2D(controller, startPosition, movement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movement.angleAndHeight)) {
        singleAxisTwist2D(controller, startPosition, movement.angleAndHeight);
        return;
    }
    const scene = controller._scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    let start = twist2DStart;
    start.x = 2.0 / width * movement.startPosition.x - 1.0;
    start.y = 2.0 / height * (height - movement.startPosition.y) - 1.0;
    start = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].normalize(start, start);
    let end = twist2DEnd;
    end.x = 2.0 / width * movement.endPosition.x - 1.0;
    end.y = 2.0 / height * (height - movement.endPosition.y) - 1.0;
    end = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].normalize(end, end);
    let startTheta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].acosClamped(start.x);
    if (start.y < 0) {
        startTheta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].TWO_PI - startTheta;
    }
    let endTheta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].acosClamped(end.x);
    if (end.y < 0) {
        endTheta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].TWO_PI - endTheta;
    }
    const theta = endTheta - startTheta;
    camera.twistRight(theta);
}
function singleAxisTwist2D(controller, startPosition, movement) {
    let rotateRate = controller._rotateFactor * controller._rotateRateRangeAdjustment;
    if (rotateRate > controller._maximumRotateRate) {
        rotateRate = controller._maximumRotateRate;
    }
    if (rotateRate < controller._minimumRotateRate) {
        rotateRate = controller._minimumRotateRate;
    }
    const scene = controller._scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    let phiWindowRatio = (movement.endPosition.x - movement.startPosition.x) / canvas.clientWidth;
    phiWindowRatio = Math.min(phiWindowRatio, controller.maximumMovementRatio);
    const deltaPhi = rotateRate * phiWindowRatio * Math.PI * 4.0;
    camera.twistRight(deltaPhi);
}
function update2D(controller) {
    const rotatable2D = controller._scene.mapMode2D === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$MapMode2D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ROTATE;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY, controller._scene.camera.transform)) {
        reactToInput(controller, controller.enableZoom, controller.zoomEventTypes, zoom2D, controller.inertiaZoom, "_lastInertiaZoomMovement");
        if (rotatable2D) {
            reactToInput(controller, controller.enableRotate, controller.translateEventTypes, twist2D, controller.inertiaSpin, "_lastInertiaSpinMovement");
        }
    } else {
        reactToInput(controller, controller.enableTranslate, controller.translateEventTypes, translate2D, controller.inertiaTranslate, "_lastInertiaTranslateMovement");
        reactToInput(controller, controller.enableZoom, controller.zoomEventTypes, zoom2D, controller.inertiaZoom, "_lastInertiaZoomMovement");
        if (rotatable2D) {
            reactToInput(controller, controller.enableRotate, controller.tiltEventTypes, twist2D, controller.inertiaSpin, "_lastInertiaTiltMovement");
        }
    }
}
const pickGlobeScratchRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const scratchDepthIntersection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchRayIntersection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function pickPosition(controller, mousePosition, result) {
    const scene = controller._scene;
    const globe = controller._globe;
    const camera = scene.camera;
    let depthIntersection;
    if (scene.pickPositionSupported) {
        depthIntersection = scene.pickPositionWorldCoordinates(mousePosition, scratchDepthIntersection);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(globe)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(depthIntersection, result);
    }
    const cullBackFaces = !controller._cameraUnderground;
    const ray = camera.getPickRay(mousePosition, pickGlobeScratchRay);
    const rayIntersection = globe.pickWorldCoordinates(ray, scene, cullBackFaces, scratchRayIntersection);
    const pickDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(depthIntersection) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(depthIntersection, camera.positionWC) : Number.POSITIVE_INFINITY;
    const rayDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(rayIntersection) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(rayIntersection, camera.positionWC) : Number.POSITIVE_INFINITY;
    if (pickDistance < rayDistance) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(depthIntersection, result);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(rayIntersection, result);
}
const scratchDistanceCartographic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
function getDistanceFromSurface(controller) {
    const ellipsoid = controller._ellipsoid;
    const scene = controller._scene;
    const camera = scene.camera;
    const mode = scene.mode;
    let height = 0.0;
    if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE3D) {
        const cartographic = ellipsoid.cartesianToCartographic(camera.position, scratchDistanceCartographic);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(cartographic)) {
            height = cartographic.height;
        }
    } else {
        height = camera.position.z;
    }
    const globeHeight = controller._scene.globeHeight ?? 0.0;
    const distanceFromSurface = Math.abs(globeHeight - height);
    return distanceFromSurface;
}
const scratchSurfaceNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function getZoomDistanceUnderground(controller, ray) {
    const origin = ray.origin;
    const direction = ray.direction;
    const distanceFromSurface = getDistanceFromSurface(controller);
    // Weight zoom distance based on how strongly the pick ray is pointing inward.
    // Geocentric normal is accurate enough for these purposes
    const surfaceNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(origin, scratchSurfaceNormal);
    let strength = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(surfaceNormal, direction));
    strength = Math.max(strength, 0.5) * 2.0;
    return distanceFromSurface * strength;
}
function getTiltCenterUnderground(controller, ray, pickedPosition, result) {
    let distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(ray.origin, pickedPosition);
    const distanceFromSurface = getDistanceFromSurface(controller);
    const maximumDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].clamp(distanceFromSurface * 5.0, controller._minimumUndergroundPickDistance, controller._maximumUndergroundPickDistance);
    if (distance > maximumDistance) {
        // Simulate look-at behavior by tilting around a small invisible sphere
        distance = Math.min(distance, distanceFromSurface / 5.0);
        distance = Math.max(distance, 100.0);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"].getPoint(ray, distance, result);
}
function getStrafeStartPositionUnderground(controller, ray, pickedPosition, result) {
    let distance;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(pickedPosition)) {
        distance = getDistanceFromSurface(controller);
    } else {
        distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(ray.origin, pickedPosition);
        if (distance > controller._maximumUndergroundPickDistance) {
            // If the picked position is too far away set the strafe speed based on the
            // camera's height from the globe surface
            distance = getDistanceFromSurface(controller);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"].getPoint(ray, distance, result);
}
const scratchInertialDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
function continueStrafing(controller, movement) {
    // Update the end position continually based on the inertial delta
    const originalEndPosition = movement.endPosition;
    const inertialDelta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].subtract(movement.endPosition, movement.startPosition, scratchInertialDelta);
    const endPosition = controller._strafeEndMousePosition;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].add(endPosition, inertialDelta, endPosition);
    movement.endPosition = endPosition;
    strafe(controller, movement, controller._strafeStartPosition);
    movement.endPosition = originalEndPosition;
}
const translateCVStartRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const translateCVEndRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const translateCVStartPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const translateCVEndPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const translateCVDifference = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const translateCVOrigin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const translateCVPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X, 0.0);
const translateCVStartMouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const translateCVEndMouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
function translateCV(controller, startPosition, movement) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(startPosition, controller._translateMousePosition)) {
        controller._looking = false;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(startPosition, controller._strafeMousePosition)) {
        controller._strafing = false;
    }
    if (controller._looking) {
        look3D(controller, startPosition, movement);
        return;
    }
    if (controller._strafing) {
        continueStrafing(controller, movement);
        return;
    }
    const scene = controller._scene;
    const camera = scene.camera;
    const cameraUnderground = controller._cameraUnderground;
    const startMouse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(movement.startPosition, translateCVStartMouse);
    const endMouse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(movement.endPosition, translateCVEndMouse);
    let startRay = camera.getPickRay(startMouse, translateCVStartRay);
    const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].ZERO, translateCVOrigin);
    const normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X;
    let globePos;
    if (camera.position.z < controller._minimumPickingTerrainHeight) {
        globePos = pickPosition(controller, startMouse, translateCVStartPos);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(globePos)) {
            origin.x = globePos.x;
        }
    }
    if (cameraUnderground || origin.x > camera.position.z && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(globePos)) {
        let pickPosition = globePos;
        if (cameraUnderground) {
            pickPosition = getStrafeStartPositionUnderground(controller, startRay, globePos, translateCVStartPos);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._strafeMousePosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._strafeEndMousePosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(pickPosition, controller._strafeStartPosition);
        controller._strafing = true;
        strafe(controller, movement, controller._strafeStartPosition);
        return;
    }
    const plane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"].fromPointNormal(origin, normal, translateCVPlane);
    startRay = camera.getPickRay(startMouse, translateCVStartRay);
    const startPlanePos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayPlane(startRay, plane, translateCVStartPos);
    const endRay = camera.getPickRay(endMouse, translateCVEndRay);
    const endPlanePos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayPlane(endRay, plane, translateCVEndPos);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(startPlanePos) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(endPlanePos)) {
        controller._looking = true;
        look3D(controller, startPosition, movement);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._translateMousePosition);
        return;
    }
    const diff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(startPlanePos, endPlanePos, translateCVDifference);
    const temp = diff.x;
    diff.x = diff.y;
    diff.y = diff.z;
    diff.z = temp;
    const mag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(diff);
    if (mag > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON6) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(diff, diff);
        camera.move(diff, mag);
    }
}
const rotateCVWindowPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const rotateCVWindowRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const rotateCVCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const rotateCVVerticalCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const rotateCVTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const rotateCVVerticalTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const rotateCVOrigin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const rotateCVPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X, 0.0);
const rotateCVCartesian3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const rotateCVCart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
const rotateCVOldTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const rotateCVQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Quaternion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quaternion$3e$__["Quaternion"]();
const rotateCVMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"]();
const tilt3DCartesian3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function rotateCV(controller, startPosition, movement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movement.angleAndHeight)) {
        movement = movement.angleAndHeight;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, controller._tiltCenterMousePosition)) {
        controller._tiltCVOffMap = false;
        controller._looking = false;
    }
    if (controller._looking) {
        look3D(controller, startPosition, movement);
        return;
    }
    const scene = controller._scene;
    const camera = scene.camera;
    if (controller._tiltCVOffMap || !controller.onMap() || Math.abs(camera.position.z) > controller._minimumPickingTerrainHeight) {
        controller._tiltCVOffMap = true;
        rotateCVOnPlane(controller, startPosition, movement);
    } else {
        rotateCVOnTerrain(controller, startPosition, movement);
    }
}
function rotateCVOnPlane(controller, startPosition, movement) {
    const scene = controller._scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    const windowPosition = rotateCVWindowPos;
    windowPosition.x = canvas.clientWidth / 2;
    windowPosition.y = canvas.clientHeight / 2;
    const ray = camera.getPickRay(windowPosition, rotateCVWindowRay);
    const normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X;
    const position = ray.origin;
    const direction = ray.direction;
    let scalar;
    const normalDotDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(normal, direction);
    if (Math.abs(normalDotDirection) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON6) {
        scalar = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(normal, position) / normalDotDirection;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(scalar) || scalar <= 0.0) {
        controller._looking = true;
        look3D(controller, startPosition, movement);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._tiltCenterMousePosition);
        return;
    }
    const center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(direction, scalar, rotateCVCenter);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(position, center, center);
    const projection = scene.mapProjection;
    const ellipsoid = projection.ellipsoid;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(center.y, center.z, center.x, center);
    const cart = projection.unproject(center, rotateCVCart);
    ellipsoid.cartographicToCartesian(cart, center);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__["FixedFrameTransforms"].eastNorthUpToFixedFrame(center, ellipsoid, rotateCVTransform);
    const oldGlobe = controller._globe;
    const oldEllipsoid = controller._ellipsoid;
    controller._globe = undefined;
    controller._ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].UNIT_SPHERE;
    controller._rotateFactor = 1.0;
    controller._rotateRateRangeAdjustment = 1.0;
    const oldTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].clone(camera.transform, rotateCVOldTransform);
    camera._setTransform(transform);
    rotate3D(controller, startPosition, movement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_Z);
    camera._setTransform(oldTransform);
    controller._globe = oldGlobe;
    controller._ellipsoid = oldEllipsoid;
    const radius = oldEllipsoid.maximumRadius;
    controller._rotateFactor = 1.0 / radius;
    controller._rotateRateRangeAdjustment = radius;
}
function rotateCVOnTerrain(controller, startPosition, movement) {
    const scene = controller._scene;
    const camera = scene.camera;
    const cameraUnderground = controller._cameraUnderground;
    let center;
    let ray;
    const normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, controller._tiltCenterMousePosition)) {
        center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(controller._tiltCenter, rotateCVCenter);
    } else {
        if (camera.position.z < controller._minimumPickingTerrainHeight) {
            center = pickPosition(controller, startPosition, rotateCVCenter);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(center)) {
            ray = camera.getPickRay(startPosition, rotateCVWindowRay);
            const position = ray.origin;
            const direction = ray.direction;
            let scalar;
            const normalDotDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(normal, direction);
            if (Math.abs(normalDotDirection) > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON6) {
                scalar = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(normal, position) / normalDotDirection;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(scalar) || scalar <= 0.0) {
                controller._looking = true;
                look3D(controller, startPosition, movement);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._tiltCenterMousePosition);
                return;
            }
            center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(direction, scalar, rotateCVCenter);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(position, center, center);
        }
        if (cameraUnderground) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(ray)) {
                ray = camera.getPickRay(startPosition, rotateCVWindowRay);
            }
            getTiltCenterUnderground(controller, ray, center, center);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._tiltCenterMousePosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(center, controller._tiltCenter);
    }
    const canvas = scene.canvas;
    const windowPosition = rotateCVWindowPos;
    windowPosition.x = canvas.clientWidth / 2;
    windowPosition.y = controller._tiltCenterMousePosition.y;
    ray = camera.getPickRay(windowPosition, rotateCVWindowRay);
    const origin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].ZERO, rotateCVOrigin);
    origin.x = center.x;
    const plane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"].fromPointNormal(origin, normal, rotateCVPlane);
    const verticalCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayPlane(ray, plane, rotateCVVerticalCenter);
    const projection = camera._projection;
    const ellipsoid = projection.ellipsoid;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(center.y, center.z, center.x, center);
    let cart = projection.unproject(center, rotateCVCart);
    ellipsoid.cartographicToCartesian(cart, center);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__["FixedFrameTransforms"].eastNorthUpToFixedFrame(center, ellipsoid, rotateCVTransform);
    let verticalTransform;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(verticalCenter)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(verticalCenter.y, verticalCenter.z, verticalCenter.x, verticalCenter);
        cart = projection.unproject(verticalCenter, rotateCVCart);
        ellipsoid.cartographicToCartesian(cart, verticalCenter);
        verticalTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__["FixedFrameTransforms"].eastNorthUpToFixedFrame(verticalCenter, ellipsoid, rotateCVVerticalTransform);
    } else {
        verticalTransform = transform;
    }
    const oldGlobe = controller._globe;
    const oldEllipsoid = controller._ellipsoid;
    controller._globe = undefined;
    controller._ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].UNIT_SPHERE;
    controller._rotateFactor = 1.0;
    controller._rotateRateRangeAdjustment = 1.0;
    let constrainedAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_Z;
    const oldTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].clone(camera.transform, rotateCVOldTransform);
    camera._setTransform(transform);
    const tangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_Z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.position, rotateCVCartesian3), rotateCVCartesian3);
    const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.right, tangent);
    rotate3D(controller, startPosition, movement, constrainedAxis, false, true);
    camera._setTransform(verticalTransform);
    if (dot < 0.0) {
        const movementDelta = movement.startPosition.y - movement.endPosition.y;
        if (cameraUnderground && movementDelta < 0.0 || !cameraUnderground && movementDelta > 0.0) {
            // Prevent camera from flipping past the up axis
            constrainedAxis = undefined;
        }
        const oldConstrainedAxis = camera.constrainedAxis;
        camera.constrainedAxis = undefined;
        rotate3D(controller, startPosition, movement, constrainedAxis, true, false);
        camera.constrainedAxis = oldConstrainedAxis;
    } else {
        rotate3D(controller, startPosition, movement, constrainedAxis, true, false);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(camera.constrainedAxis)) {
        const right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.constrainedAxis, tilt3DCartesian3);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equalsEpsilon(right, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].ZERO, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON6)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(right, camera.right) < 0.0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].negate(right, right);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(right, camera.direction, camera.up);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.up, camera.right);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.up, camera.up);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.right, camera.right);
        }
    }
    camera._setTransform(oldTransform);
    controller._globe = oldGlobe;
    controller._ellipsoid = oldEllipsoid;
    const radius = oldEllipsoid.maximumRadius;
    controller._rotateFactor = 1.0 / radius;
    controller._rotateRateRangeAdjustment = radius;
    const originalPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.positionWC, rotateCVCartesian3);
    if (controller.enableCollisionDetection) {
        adjustHeightForTerrain(controller, true);
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(camera.positionWC, originalPosition)) {
        camera._setTransform(verticalTransform);
        camera.worldToCameraCoordinatesPoint(originalPosition, originalPosition);
        const magSqrd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitudeSquared(originalPosition);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitudeSquared(camera.position) > magSqrd) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.position, camera.position);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(camera.position, Math.sqrt(magSqrd), camera.position);
        }
        const angle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].angleBetween(originalPosition, camera.position);
        const axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(originalPosition, camera.position, originalPosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(axis, axis);
        const quaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Quaternion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quaternion$3e$__["Quaternion"].fromAxisAngle(axis, angle, rotateCVQuaternion);
        const rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"].fromQuaternion(quaternion, rotateCVMatrix);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"].multiplyByVector(rotation, camera.direction, camera.direction);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"].multiplyByVector(rotation, camera.up, camera.up);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.up, camera.right);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.right, camera.direction, camera.up);
        camera._setTransform(oldTransform);
    }
}
const zoomCVWindowPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const zoomCVWindowRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const zoomCVIntersection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function zoomCV(controller, startPosition, movement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movement.distance)) {
        movement = movement.distance;
    }
    const scene = controller._scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    const cameraUnderground = controller._cameraUnderground;
    let windowPosition;
    if (cameraUnderground) {
        windowPosition = startPosition;
    } else {
        windowPosition = zoomCVWindowPos;
        windowPosition.x = canvas.clientWidth / 2;
        windowPosition.y = canvas.clientHeight / 2;
    }
    const ray = camera.getPickRay(windowPosition, zoomCVWindowRay);
    const position = ray.origin;
    const direction = ray.direction;
    const height = camera.position.z;
    let intersection;
    if (height < controller._minimumPickingTerrainHeight) {
        intersection = pickPosition(controller, windowPosition, zoomCVIntersection);
    }
    let distance;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(intersection)) {
        distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(position, intersection);
    }
    if (cameraUnderground) {
        const distanceUnderground = getZoomDistanceUnderground(controller, ray, height);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(distance)) {
            distance = Math.min(distance, distanceUnderground);
        } else {
            distance = distanceUnderground;
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(distance)) {
        const normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X;
        distance = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(normal, position) / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(normal, direction);
    }
    handleZoom(controller, startPosition, movement, controller.zoomFactor, distance);
}
function updateCV(controller) {
    const scene = controller._scene;
    const camera = scene.camera;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY, camera.transform)) {
        reactToInput(controller, controller.enableRotate, controller.rotateEventTypes, rotate3D, controller.inertiaSpin, "_lastInertiaSpinMovement");
        reactToInput(controller, controller.enableZoom, controller.zoomEventTypes, zoom3D, controller.inertiaZoom, "_lastInertiaZoomMovement");
    } else {
        const tweens = controller._tweens;
        if (controller._aggregator.anyButtonDown) {
            tweens.removeAll();
        }
        reactToInput(controller, controller.enableTilt, controller.tiltEventTypes, rotateCV, controller.inertiaSpin, "_lastInertiaTiltMovement");
        reactToInput(controller, controller.enableTranslate, controller.translateEventTypes, translateCV, controller.inertiaTranslate, "_lastInertiaTranslateMovement");
        reactToInput(controller, controller.enableZoom, controller.zoomEventTypes, zoomCV, controller.inertiaZoom, "_lastInertiaZoomMovement");
        reactToInput(controller, controller.enableLook, controller.lookEventTypes, look3D);
        if (!controller._aggregator.anyButtonDown && !tweens.contains(controller._tween)) {
            const tween = camera.createCorrectPositionTween(controller.bounceAnimationTime);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(tween)) {
                controller._tween = tweens.add(tween);
            }
        }
        tweens.update();
    }
}
const scratchStrafeRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const scratchStrafePlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_X, 0.0);
const scratchStrafeIntersection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchStrafeDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function strafe(controller, movement, strafeStartPosition) {
    const scene = controller._scene;
    const camera = scene.camera;
    const ray = camera.getPickRay(movement.endPosition, scratchStrafeRay);
    let direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.direction, scratchStrafeDirection);
    if (scene.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(direction.z, direction.x, direction.y, direction);
    }
    const plane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"].fromPointNormal(strafeStartPosition, direction, scratchStrafePlane);
    const intersection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayPlane(ray, plane, scratchStrafeIntersection);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(intersection)) {
        return;
    }
    direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(strafeStartPosition, intersection, direction);
    if (scene.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(direction.y, direction.z, direction.x, direction);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(camera.position, direction, camera.position);
}
const spin3DPick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchCartographic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
const scratchRadii = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchEllipsoid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"]();
const scratchLookUp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function spin3D(controller, startPosition, movement) {
    const scene = controller._scene;
    const camera = scene.camera;
    const cameraUnderground = controller._cameraUnderground;
    let ellipsoid = controller._ellipsoid;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].equals(camera.transform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY)) {
        rotate3D(controller, startPosition, movement);
        return;
    }
    let magnitude;
    let radii;
    const up = ellipsoid.geodeticSurfaceNormal(camera.position, scratchLookUp);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, controller._rotateMousePosition)) {
        if (controller._looking) {
            look3D(controller, startPosition, movement, up);
        } else if (controller._rotating) {
            rotate3D(controller, startPosition, movement);
        } else if (controller._strafing) {
            continueStrafing(controller, movement);
        } else {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(camera.position) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(controller._rotateStartPosition)) {
                // Pan action is no longer valid if camera moves below the pan ellipsoid
                return;
            }
            magnitude = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(controller._rotateStartPosition);
            radii = scratchRadii;
            radii.x = radii.y = radii.z = magnitude;
            ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].fromCartesian3(radii, scratchEllipsoid);
            pan3D(controller, startPosition, movement, ellipsoid);
        }
        return;
    }
    controller._looking = false;
    controller._rotating = false;
    controller._strafing = false;
    const height = ellipsoid.cartesianToCartographic(camera.positionWC, scratchCartographic).height;
    const globe = controller._globe;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(globe) && height < controller._minimumPickingTerrainHeight) {
        const mousePos = pickPosition(controller, movement.startPosition, scratchMousePosition);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(mousePos)) {
            let strafing;
            const ray = camera.getPickRay(movement.startPosition, pickGlobeScratchRay);
            if (cameraUnderground) {
                strafing = true;
                getStrafeStartPositionUnderground(controller, ray, mousePos, mousePos);
            } else {
                const normal = ellipsoid.geodeticSurfaceNormal(mousePos, scratchNormal);
                const tangentPick = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(ray.direction, normal)) < 0.05;
                if (tangentPick) {
                    strafing = true;
                } else {
                    strafing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(camera.position) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(mousePos);
                }
            }
            if (strafing) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._strafeEndMousePosition);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(mousePos, controller._strafeStartPosition);
                controller._strafing = true;
                strafe(controller, movement, controller._strafeStartPosition);
            } else {
                magnitude = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(mousePos);
                radii = scratchRadii;
                radii.x = radii.y = radii.z = magnitude;
                ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].fromCartesian3(radii, scratchEllipsoid);
                pan3D(controller, startPosition, movement, ellipsoid);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(mousePos, controller._rotateStartPosition);
            }
        } else {
            controller._looking = true;
            look3D(controller, startPosition, movement, up);
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(camera.pickEllipsoid(movement.startPosition, controller._ellipsoid, spin3DPick))) {
        pan3D(controller, startPosition, movement, controller._ellipsoid);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(spin3DPick, controller._rotateStartPosition);
    } else if (height > controller._minimumTrackBallHeight) {
        controller._rotating = true;
        rotate3D(controller, startPosition, movement);
    } else {
        controller._looking = true;
        look3D(controller, startPosition, movement, up);
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._rotateMousePosition);
}
function rotate3D(controller, startPosition, movement, constrainedAxis, rotateOnlyVertical, rotateOnlyHorizontal) {
    rotateOnlyVertical = rotateOnlyVertical ?? false;
    rotateOnlyHorizontal = rotateOnlyHorizontal ?? false;
    const scene = controller._scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    const oldAxis = camera.constrainedAxis;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(constrainedAxis)) {
        camera.constrainedAxis = constrainedAxis;
    }
    const rho = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(camera.position);
    let rotateRate = controller._rotateFactor * (rho - controller._rotateRateRangeAdjustment);
    if (rotateRate > controller._maximumRotateRate) {
        rotateRate = controller._maximumRotateRate;
    }
    if (rotateRate < controller._minimumRotateRate) {
        rotateRate = controller._minimumRotateRate;
    }
    let phiWindowRatio = (movement.startPosition.x - movement.endPosition.x) / canvas.clientWidth;
    let thetaWindowRatio = (movement.startPosition.y - movement.endPosition.y) / canvas.clientHeight;
    phiWindowRatio = Math.min(phiWindowRatio, controller.maximumMovementRatio);
    thetaWindowRatio = Math.min(thetaWindowRatio, controller.maximumMovementRatio);
    const deltaPhi = rotateRate * phiWindowRatio * Math.PI * 2.0;
    let deltaTheta = rotateRate * thetaWindowRatio * Math.PI;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(constrainedAxis) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(controller.maximumTiltAngle)) {
        const maximumTiltAngle = controller.maximumTiltAngle;
        const dotProduct = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.direction, constrainedAxis);
        const tilt = Math.PI - Math.acos(dotProduct) + deltaTheta;
        if (tilt > maximumTiltAngle) {
            deltaTheta -= tilt - maximumTiltAngle;
        }
    }
    if (!rotateOnlyVertical) {
        camera.rotateRight(deltaPhi);
    }
    if (!rotateOnlyHorizontal) {
        camera.rotateUp(deltaTheta);
    }
    camera.constrainedAxis = oldAxis;
}
const pan3DP0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian4$3e$__["Cartesian4"].clone(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian4$3e$__["Cartesian4"].UNIT_W);
const pan3DP1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian4$3e$__["Cartesian4"].clone(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian4$3e$__["Cartesian4"].UNIT_W);
const pan3DTemp0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const pan3DTemp1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const pan3DTemp2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const pan3DTemp3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const pan3DStartMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const pan3DEndMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const pan3DDiffMousePosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const pan3DPixelDimensions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const panRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
function pan3D(controller, startPosition, movement, ellipsoid) {
    const scene = controller._scene;
    const camera = scene.camera;
    const startMousePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(movement.startPosition, pan3DStartMousePosition);
    const endMousePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(movement.endPosition, pan3DEndMousePosition);
    const height = ellipsoid.cartesianToCartographic(camera.positionWC, scratchCartographic).height;
    let p0, p1;
    if (!movement.inertiaEnabled && height < controller._minimumPickingTerrainHeight) {
        p0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(controller._panLastWorldPosition, pan3DP0);
        // Use the last picked world position unless we're starting a new drag
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(controller._globe) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equalsEpsilon(startMousePosition, controller._panLastMousePosition)) {
            p0 = pickPosition(controller, startMousePosition, pan3DP0);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(controller._globe) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(p0)) {
            const toCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(p0, camera.positionWC, pan3DTemp1);
            const toCenterProj = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(camera.directionWC, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.directionWC, toCenter), pan3DTemp1);
            const distanceToNearPlane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(toCenterProj);
            const pixelDimensions = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distanceToNearPlane, scene.pixelRatio, pan3DPixelDimensions);
            const dragDelta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].subtract(endMousePosition, startMousePosition, pan3DDiffMousePosition);
            // Move the camera to the the distance the cursor moved in worldspace
            const right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(camera.rightWC, dragDelta.x * pixelDimensions.x, pan3DTemp1);
            // Move the camera towards the picked position in worldspace as the camera is pointed towards a horizon view
            const cameraPositionNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.positionWC, scratchCameraPositionNormal);
            const endPickDirection = camera.getPickRay(endMousePosition, panRay).direction;
            const endPickProj = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(endPickDirection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].projectVector(endPickDirection, camera.rightWC, pan3DTemp2), pan3DTemp2);
            const angle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].angleBetween(endPickProj, camera.directionWC);
            let forward = 1.0;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(camera.frustum.fov)) {
                forward = Math.max(Math.tan(angle), 0.1); // Clamp so we don't make the magnitude infinitely large when the angle is small
            }
            let dot = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.directionWC, cameraPositionNormal));
            const magnitude = -dragDelta.y * pixelDimensions.y * 2.0 / Math.sqrt(forward) * (1.0 - dot);
            const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(endPickDirection, magnitude, pan3DTemp2);
            // Move the camera up the distance the cursor moved in worldspace as the camera is pointed towards the center
            dot = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.upWC, cameraPositionNormal));
            const up = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(camera.upWC, -dragDelta.y * (1.0 - dot) * pixelDimensions.y, pan3DTemp3);
            p1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(p0, right, pan3DP1);
            p1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(p1, direction, p1);
            p1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(p1, up, p1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(p1, controller._panLastWorldPosition);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(endMousePosition, controller._panLastMousePosition);
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(p0) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(p1)) {
        p0 = camera.pickEllipsoid(startMousePosition, ellipsoid, pan3DP0);
        p1 = camera.pickEllipsoid(endMousePosition, ellipsoid, pan3DP1);
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(p0) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(p1)) {
        controller._rotating = true;
        rotate3D(controller, startPosition, movement);
        return;
    }
    p0 = camera.worldToCameraCoordinates(p0, p0);
    p1 = camera.worldToCameraCoordinates(p1, p1);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(camera.constrainedAxis)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(p0, p0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(p1, p1);
        const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(p0, p1);
        const axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(p0, p1, pan3DTemp0);
        if (dot < 1.0 && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equalsEpsilon(axis, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].ZERO, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON14)) {
            // dot is in [0, 1]
            const angle = Math.acos(dot);
            camera.rotate(axis, angle);
        }
    } else {
        const basis0 = camera.constrainedAxis;
        const basis1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].mostOrthogonalAxis(basis0, pan3DTemp0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(basis1, basis0, basis1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(basis1, basis1);
        const basis2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(basis0, basis1, pan3DTemp1);
        const startRho = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(p0);
        const startDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(basis0, p0);
        const startTheta = Math.acos(startDot / startRho);
        const startRej = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(basis0, startDot, pan3DTemp2);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(p0, startRej, startRej);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(startRej, startRej);
        const endRho = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(p1);
        const endDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(basis0, p1);
        const endTheta = Math.acos(endDot / endRho);
        const endRej = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(basis0, endDot, pan3DTemp3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(p1, endRej, endRej);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(endRej, endRej);
        let startPhi = Math.acos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(startRej, basis1));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(startRej, basis2) < 0) {
            startPhi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].TWO_PI - startPhi;
        }
        let endPhi = Math.acos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(endRej, basis1));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(endRej, basis2) < 0) {
            endPhi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].TWO_PI - endPhi;
        }
        const deltaPhi = startPhi - endPhi;
        let east;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equalsEpsilon(basis0, camera.position, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON2)) {
            east = camera.right;
        } else {
            east = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(basis0, camera.position, pan3DTemp0);
        }
        const planeNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(basis0, east, pan3DTemp0);
        const side0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(planeNormal, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(p0, basis0, pan3DTemp1));
        const side1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(planeNormal, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(p1, basis0, pan3DTemp1));
        let deltaTheta;
        if (side0 > 0 && side1 > 0) {
            deltaTheta = endTheta - startTheta;
        } else if (side0 > 0 && side1 <= 0) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.position, basis0) > 0) {
                deltaTheta = -startTheta - endTheta;
            } else {
                deltaTheta = startTheta + endTheta;
            }
        } else {
            deltaTheta = startTheta - endTheta;
        }
        camera.rotateRight(deltaPhi);
        camera.rotateUp(deltaTheta);
    }
}
const zoom3DUnitPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const zoom3DCartographic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
let preIntersectionDistance = 0;
function zoom3D(controller, startPosition, movement) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movement.distance)) {
        movement = movement.distance;
    }
    const inertiaMovement = movement.inertiaEnabled;
    const ellipsoid = controller._ellipsoid;
    const scene = controller._scene;
    const camera = scene.camera;
    const canvas = scene.canvas;
    const cameraUnderground = controller._cameraUnderground;
    let windowPosition;
    if (cameraUnderground) {
        windowPosition = startPosition;
    } else {
        windowPosition = zoomCVWindowPos;
        windowPosition.x = canvas.clientWidth / 2;
        windowPosition.y = canvas.clientHeight / 2;
    }
    const ray = camera.getPickRay(windowPosition, zoomCVWindowRay);
    let intersection;
    const height = ellipsoid.cartesianToCartographic(camera.position, zoom3DCartographic).height;
    const approachingCollision = Math.abs(preIntersectionDistance) < controller.minimumPickingTerrainDistanceWithInertia;
    const needPickGlobe = inertiaMovement ? approachingCollision : height < controller._minimumPickingTerrainHeight;
    if (needPickGlobe) {
        intersection = pickPosition(controller, windowPosition, zoomCVIntersection);
    }
    let distance;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(intersection)) {
        distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].distance(ray.origin, intersection);
    }
    // In tracking/lookAt mode (_globe is undefined), pickPosition can hit terrain
    // behind the intended target. Ignore farther picks to prevent zoom snap.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(controller._globe) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(distance)) {
        const targetDistance = camera.getMagnitude();
        if (targetDistance < distance) {
            distance = undefined;
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(distance)) {
        preIntersectionDistance = distance;
    }
    if (cameraUnderground) {
        const distanceUnderground = getZoomDistanceUnderground(controller, ray, height);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(distance)) {
            distance = Math.min(distance, distanceUnderground);
        } else {
            distance = distanceUnderground;
        }
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(distance)) {
        distance = height;
    }
    const unitPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.position, zoom3DUnitPosition);
    handleZoom(controller, startPosition, movement, controller.zoomFactor, distance, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(unitPosition, camera.direction));
}
const tilt3DWindowPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const tilt3DRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const tilt3DCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const tilt3DVerticalCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const tilt3DTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const tilt3DVerticalTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const tilt3DOldTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const tilt3DQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Quaternion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quaternion$3e$__["Quaternion"]();
const tilt3DMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"]();
const tilt3DCart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
const tilt3DLookUp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function tilt3D(controller, startPosition, movement) {
    const scene = controller._scene;
    const camera = scene.camera;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].equals(camera.transform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY)) {
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(movement.angleAndHeight)) {
        movement = movement.angleAndHeight;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, controller._tiltCenterMousePosition)) {
        controller._tiltOnEllipsoid = false;
        controller._looking = false;
    }
    if (controller._looking) {
        const up = controller._ellipsoid.geodeticSurfaceNormal(camera.position, tilt3DLookUp);
        look3D(controller, startPosition, movement, up);
        return;
    }
    const ellipsoid = controller._ellipsoid;
    const cartographic = ellipsoid.cartesianToCartographic(camera.position, tilt3DCart);
    if (controller._tiltOnEllipsoid || cartographic.height > controller._minimumCollisionTerrainHeight) {
        controller._tiltOnEllipsoid = true;
        tilt3DOnEllipsoid(controller, startPosition, movement);
    } else {
        tilt3DOnTerrain(controller, startPosition, movement);
    }
}
const tilt3DOnEllipsoidCartographic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
function tilt3DOnEllipsoid(controller, startPosition, movement) {
    const ellipsoid = controller._ellipsoid;
    const scene = controller._scene;
    const camera = scene.camera;
    const minHeight = controller.minimumZoomDistance * 0.25;
    const height = ellipsoid.cartesianToCartographic(camera.positionWC, tilt3DOnEllipsoidCartographic).height;
    if (height - minHeight - 1.0 < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON3 && movement.endPosition.y - movement.startPosition.y < 0) {
        return;
    }
    const canvas = scene.canvas;
    const windowPosition = tilt3DWindowPos;
    windowPosition.x = canvas.clientWidth / 2;
    windowPosition.y = canvas.clientHeight / 2;
    const ray = camera.getPickRay(windowPosition, tilt3DRay);
    let center;
    const intersection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayEllipsoid(ray, ellipsoid);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(intersection)) {
        center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"].getPoint(ray, intersection.start, tilt3DCenter);
    } else if (height > controller._minimumTrackBallHeight) {
        const grazingAltitudeLocation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].grazingAltitudeLocation(ray, ellipsoid);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(grazingAltitudeLocation)) {
            return;
        }
        const grazingAltitudeCart = ellipsoid.cartesianToCartographic(grazingAltitudeLocation, tilt3DCart);
        grazingAltitudeCart.height = 0.0;
        center = ellipsoid.cartographicToCartesian(grazingAltitudeCart, tilt3DCenter);
    } else {
        controller._looking = true;
        const up = controller._ellipsoid.geodeticSurfaceNormal(camera.position, tilt3DLookUp);
        look3D(controller, startPosition, movement, up);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._tiltCenterMousePosition);
        return;
    }
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__["FixedFrameTransforms"].eastNorthUpToFixedFrame(center, ellipsoid, tilt3DTransform);
    const oldGlobe = controller._globe;
    const oldEllipsoid = controller._ellipsoid;
    controller._globe = undefined;
    controller._ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].UNIT_SPHERE;
    controller._rotateFactor = 1.0;
    controller._rotateRateRangeAdjustment = 1.0;
    const oldTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].clone(camera.transform, tilt3DOldTransform);
    camera._setTransform(transform);
    rotate3D(controller, startPosition, movement, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_Z);
    camera._setTransform(oldTransform);
    controller._globe = oldGlobe;
    controller._ellipsoid = oldEllipsoid;
    const radius = oldEllipsoid.maximumRadius;
    controller._rotateFactor = 1.0 / radius;
    controller._rotateRateRangeAdjustment = radius;
}
function tilt3DOnTerrain(controller, startPosition, movement) {
    const ellipsoid = controller._ellipsoid;
    const scene = controller._scene;
    const camera = scene.camera;
    const cameraUnderground = controller._cameraUnderground;
    let center;
    let ray;
    let intersection;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].equals(startPosition, controller._tiltCenterMousePosition)) {
        center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(controller._tiltCenter, tilt3DCenter);
    } else {
        center = pickPosition(controller, startPosition, tilt3DCenter);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(center)) {
            ray = camera.getPickRay(startPosition, tilt3DRay);
            intersection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayEllipsoid(ray, ellipsoid);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(intersection)) {
                const cartographic = ellipsoid.cartesianToCartographic(camera.position, tilt3DCart);
                if (cartographic.height <= controller._minimumTrackBallHeight) {
                    controller._looking = true;
                    const up = controller._ellipsoid.geodeticSurfaceNormal(camera.position, tilt3DLookUp);
                    look3D(controller, startPosition, movement, up);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._tiltCenterMousePosition);
                }
                return;
            }
            center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"].getPoint(ray, intersection.start, tilt3DCenter);
        }
        if (cameraUnderground) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(ray)) {
                ray = camera.getPickRay(startPosition, tilt3DRay);
            }
            getTiltCenterUnderground(controller, ray, center, center);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"].clone(startPosition, controller._tiltCenterMousePosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(center, controller._tiltCenter);
    }
    const canvas = scene.canvas;
    const windowPosition = tilt3DWindowPos;
    windowPosition.x = canvas.clientWidth / 2;
    windowPosition.y = controller._tiltCenterMousePosition.y;
    ray = camera.getPickRay(windowPosition, tilt3DRay);
    const mag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(center);
    const radii = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].fromElements(mag, mag, mag, scratchRadii);
    const newEllipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].fromCartesian3(radii, scratchEllipsoid);
    intersection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$IntersectionTests$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IntersectionTests$3e$__["IntersectionTests"].rayEllipsoid(ray, newEllipsoid);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(intersection)) {
        return;
    }
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(ray.origin) > mag ? intersection.start : intersection.stop;
    const verticalCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"].getPoint(ray, t, tilt3DVerticalCenter);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__["FixedFrameTransforms"].eastNorthUpToFixedFrame(center, ellipsoid, tilt3DTransform);
    const verticalTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$FixedFrameTransforms$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FixedFrameTransforms$3e$__["FixedFrameTransforms"].eastNorthUpToFixedFrame(verticalCenter, newEllipsoid, tilt3DVerticalTransform);
    const oldGlobe = controller._globe;
    const oldEllipsoid = controller._ellipsoid;
    controller._globe = undefined;
    controller._ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].UNIT_SPHERE;
    controller._rotateFactor = 1.0;
    controller._rotateRateRangeAdjustment = 1.0;
    let constrainedAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_Z;
    const oldTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].clone(camera.transform, tilt3DOldTransform);
    camera._setTransform(verticalTransform);
    const tangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(verticalCenter, camera.positionWC, tilt3DCartesian3);
    const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(camera.rightWC, tangent);
    if (dot < 0.0) {
        const movementDelta = movement.startPosition.y - movement.endPosition.y;
        if (cameraUnderground && movementDelta < 0.0 || !cameraUnderground && movementDelta > 0.0) {
            // Prevent camera from flipping past the up axis
            constrainedAxis = undefined;
        }
        const oldConstrainedAxis = camera.constrainedAxis;
        camera.constrainedAxis = undefined;
        rotate3D(controller, startPosition, movement, constrainedAxis, true, false);
        camera.constrainedAxis = oldConstrainedAxis;
    } else {
        rotate3D(controller, startPosition, movement, constrainedAxis, true, false);
    }
    camera._setTransform(transform);
    rotate3D(controller, startPosition, movement, constrainedAxis, false, true);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(camera.constrainedAxis)) {
        const right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.constrainedAxis, tilt3DCartesian3);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equalsEpsilon(right, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].ZERO, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON6)) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(right, camera.right) < 0.0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].negate(right, right);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(right, camera.direction, camera.up);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.up, camera.right);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.up, camera.up);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.right, camera.right);
        }
    }
    camera._setTransform(oldTransform);
    controller._globe = oldGlobe;
    controller._ellipsoid = oldEllipsoid;
    const radius = oldEllipsoid.maximumRadius;
    controller._rotateFactor = 1.0 / radius;
    controller._rotateRateRangeAdjustment = radius;
    const originalPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.positionWC, tilt3DCartesian3);
    if (controller.enableCollisionDetection) {
        adjustHeightForTerrain(controller, true);
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(camera.positionWC, originalPosition)) {
        camera._setTransform(verticalTransform);
        camera.worldToCameraCoordinatesPoint(originalPosition, originalPosition);
        const magSqrd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitudeSquared(originalPosition);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitudeSquared(camera.position) > magSqrd) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.position, camera.position);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(camera.position, Math.sqrt(magSqrd), camera.position);
        }
        const angle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].angleBetween(originalPosition, camera.position);
        const axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(originalPosition, camera.position, originalPosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(axis, axis);
        const quaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Quaternion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quaternion$3e$__["Quaternion"].fromAxisAngle(axis, angle, tilt3DQuaternion);
        const rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"].fromQuaternion(quaternion, tilt3DMatrix);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"].multiplyByVector(rotation, camera.direction, camera.direction);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix3$3e$__["Matrix3"].multiplyByVector(rotation, camera.up, camera.up);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.up, camera.right);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.right, camera.direction, camera.up);
        camera._setTransform(oldTransform);
    }
}
const look3DStartPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const look3DEndPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian2$3e$__["Cartesian2"]();
const look3DStartRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const look3DEndRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ray$3e$__["Ray"]();
const look3DNegativeRot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const look3DTan = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
function look3D(controller, startPosition, movement, rotationAxis) {
    const scene = controller._scene;
    const camera = scene.camera;
    const startPos = look3DStartPos;
    startPos.x = movement.startPosition.x;
    startPos.y = 0.0;
    const endPos = look3DEndPos;
    endPos.x = movement.endPosition.x;
    endPos.y = 0.0;
    let startRay = camera.getPickRay(startPos, look3DStartRay);
    let endRay = camera.getPickRay(endPos, look3DEndRay);
    let angle = 0.0;
    let start;
    let end;
    if (camera.frustum instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$OrthographicFrustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OrthographicFrustum$3e$__["OrthographicFrustum"]) {
        start = startRay.origin;
        end = endRay.origin;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(camera.direction, start, start);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(camera.direction, end, end);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(start, camera.position, start);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(end, camera.position, end);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(start, start);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(end, end);
    } else {
        start = startRay.direction;
        end = endRay.direction;
    }
    let dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(start, end);
    if (dot < 1.0) {
        // dot is in [0, 1]
        angle = Math.acos(dot);
    }
    angle = movement.startPosition.x > movement.endPosition.x ? -angle : angle;
    const horizontalRotationAxis = controller._horizontalRotationAxis;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(rotationAxis)) {
        camera.look(rotationAxis, -angle);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(horizontalRotationAxis)) {
        camera.look(horizontalRotationAxis, -angle);
    } else {
        camera.lookLeft(angle);
    }
    startPos.x = 0.0;
    startPos.y = movement.startPosition.y;
    endPos.x = 0.0;
    endPos.y = movement.endPosition.y;
    startRay = camera.getPickRay(startPos, look3DStartRay);
    endRay = camera.getPickRay(endPos, look3DEndRay);
    angle = 0.0;
    if (camera.frustum instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$OrthographicFrustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OrthographicFrustum$3e$__["OrthographicFrustum"]) {
        start = startRay.origin;
        end = endRay.origin;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(camera.direction, start, start);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].add(camera.direction, end, end);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(start, camera.position, start);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].subtract(end, camera.position, end);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(start, start);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(end, end);
    } else {
        start = startRay.direction;
        end = endRay.direction;
    }
    dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(start, end);
    if (dot < 1.0) {
        // dot is in [0, 1]
        angle = Math.acos(dot);
    }
    angle = movement.startPosition.y > movement.endPosition.y ? -angle : angle;
    rotationAxis = rotationAxis ?? horizontalRotationAxis;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(rotationAxis)) {
        const direction = camera.direction;
        const negativeRotationAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].negate(rotationAxis, look3DNegativeRot);
        const northParallel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equalsEpsilon(direction, rotationAxis, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON2);
        const southParallel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equalsEpsilon(direction, negativeRotationAxis, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON2);
        if (!northParallel && !southParallel) {
            dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(direction, rotationAxis);
            let angleToAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].acosClamped(dot);
            if (angle > 0 && angle > angleToAxis) {
                angle = angleToAxis - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON4;
            }
            dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].dot(direction, negativeRotationAxis);
            angleToAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].acosClamped(dot);
            if (angle < 0 && -angle > angleToAxis) {
                angle = -angleToAxis + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Math$3e$__["Math"].EPSILON4;
            }
            const tangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(rotationAxis, direction, look3DTan);
            camera.look(tangent, angle);
        } else if (northParallel && angle < 0 || southParallel && angle > 0) {
            camera.look(camera.right, -angle);
        }
    } else {
        camera.lookUp(angle);
    }
}
function update3D(controller) {
    reactToInput(controller, controller.enableRotate, controller.rotateEventTypes, spin3D, controller.inertiaSpin, "_lastInertiaSpinMovement");
    reactToInput(controller, controller.enableZoom, controller.zoomEventTypes, zoom3D, controller.inertiaZoom, "_lastInertiaZoomMovement");
    reactToInput(controller, controller.enableTilt, controller.tiltEventTypes, tilt3D, controller.inertiaSpin, "_lastInertiaTiltMovement");
    reactToInput(controller, controller.enableLook, controller.lookEventTypes, look3D);
}
const scratchAdjustHeightTransform = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"]();
const scratchAdjustHeightCartographic = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartographic$3e$__["Cartographic"]();
function adjustHeightForTerrain(controller, cameraChanged) {
    controller._adjustedHeightForTerrain = true;
    const scene = controller._scene;
    const mode = scene.mode;
    if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE2D || mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].MORPHING) {
        return;
    }
    const camera = scene.camera;
    const ellipsoid = scene.ellipsoid ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].WGS84;
    const projection = scene.mapProjection;
    let transform;
    let mag;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].equals(camera.transform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY)) {
        transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].clone(camera.transform, scratchAdjustHeightTransform);
        mag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].magnitude(camera.position);
        camera._setTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY);
    }
    const cartographic = scratchAdjustHeightCartographic;
    if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE3D) {
        ellipsoid.cartesianToCartographic(camera.position, cartographic);
    } else {
        projection.unproject(camera.position, cartographic);
    }
    let heightUpdated = false;
    if (cartographic.height < controller._minimumCollisionTerrainHeight) {
        const globeHeight = controller._scene.globeHeight;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(globeHeight)) {
            const height = globeHeight + controller.minimumZoomDistance;
            const difference = globeHeight - controller._lastGlobeHeight;
            const percentDifference = difference / controller._lastGlobeHeight;
            // Unless the camera has been moved by user input, to avoid big jumps during tile loads
            // only make height updates when the globe height has been fairly stable across several frames
            if (cartographic.height < height && (cameraChanged || Math.abs(percentDifference) <= 0.1)) {
                cartographic.height = height;
                if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE3D) {
                    ellipsoid.cartographicToCartesian(cartographic, camera.position);
                } else {
                    projection.project(cartographic, camera.position);
                }
                heightUpdated = true;
            }
            if (cameraChanged || Math.abs(percentDifference) <= 0.1) {
                controller._lastGlobeHeight = globeHeight;
            } else {
                controller._lastGlobeHeight += difference * 0.1;
            }
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(transform)) {
        camera._setTransform(transform);
        if (heightUpdated) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.position, camera.position);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].negate(camera.position, camera.direction);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].multiplyByScalar(camera.position, Math.max(mag, controller.minimumZoomDistance), camera.position);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].normalize(camera.direction, camera.direction);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.direction, camera.up, camera.right);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].cross(camera.right, camera.direction, camera.up);
        }
    }
}
/**
 * @private
 */ ScreenSpaceCameraController.prototype.onMap = function() {
    const scene = this._scene;
    const mode = scene.mode;
    const camera = scene.camera;
    if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW) {
        return Math.abs(camera.position.x) - this._maxCoord.x < 0 && Math.abs(camera.position.y) - this._maxCoord.y < 0;
    }
    return true;
};
const scratchPreviousPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
const scratchPreviousDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"]();
/**
 * @private
 */ ScreenSpaceCameraController.prototype.update = function() {
    const scene = this._scene;
    const { camera, globe, mode } = scene;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].equals(camera.transform, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Matrix4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Matrix4$3e$__["Matrix4"].IDENTITY)) {
        this._globe = undefined;
        this._ellipsoid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].UNIT_SPHERE;
    } else {
        this._globe = globe;
        this._ellipsoid = scene.ellipsoid ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Ellipsoid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ellipsoid$3e$__["Ellipsoid"].default;
    }
    const { verticalExaggeration, verticalExaggerationRelativeHeight } = scene;
    this._minimumCollisionTerrainHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$VerticalExaggeration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalExaggeration$3e$__["VerticalExaggeration"].getHeight(this.minimumCollisionTerrainHeight, verticalExaggeration, verticalExaggerationRelativeHeight);
    this._minimumPickingTerrainHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$VerticalExaggeration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalExaggeration$3e$__["VerticalExaggeration"].getHeight(this.minimumPickingTerrainHeight, verticalExaggeration, verticalExaggerationRelativeHeight);
    this._minimumTrackBallHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$VerticalExaggeration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VerticalExaggeration$3e$__["VerticalExaggeration"].getHeight(this.minimumTrackBallHeight, verticalExaggeration, verticalExaggerationRelativeHeight);
    this._cameraUnderground = scene.cameraUnderground && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$defined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defined$3e$__["defined"])(this._globe);
    const radius = this._ellipsoid.maximumRadius;
    this._rotateFactor = 1.0 / radius;
    this._rotateRateRangeAdjustment = radius;
    this._adjustedHeightForTerrain = false;
    const previousPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.positionWC, scratchPreviousPosition);
    const previousDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].clone(camera.directionWC, scratchPreviousDirection);
    if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE2D) {
        update2D(this);
    } else if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].COLUMBUS_VIEW) {
        this._horizontalRotationAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].UNIT_Z;
        updateCV(this);
    } else if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$engine$2f$Source$2f$Scene$2f$SceneMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].SCENE3D) {
        this._horizontalRotationAxis = undefined;
        update3D(this);
    }
    if (this.enableCollisionDetection && !this._adjustedHeightForTerrain) {
        // Adjust the camera height if the camera moved at all (user input or inertia) and an action didn't already adjust the camera height
        const cameraChanged = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(previousPosition, camera.positionWC) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$Cartesian3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cartesian3$3e$__["Cartesian3"].equals(previousDirection, camera.directionWC);
        adjustHeightForTerrain(this, cameraChanged);
    }
    this._aggregator.reset();
};
/**
 * Returns true if this object was destroyed; otherwise, false.
 * <br /><br />
 * If this object was destroyed, it should not be used; calling any function other than
 * <code>isDestroyed</code> will result in a {@link DeveloperError} exception.
 *
 * @returns {boolean} <code>true</code> if this object was destroyed; otherwise, <code>false</code>.
 *
 * @see ScreenSpaceCameraController#destroy
 */ ScreenSpaceCameraController.prototype.isDestroyed = function() {
    return false;
};
/**
 * Removes mouse listeners held by this object.
 * <br /><br />
 * Once an object is destroyed, it should not be used; calling any function other than
 * <code>isDestroyed</code> will result in a {@link DeveloperError} exception.  Therefore,
 * assign the return value (<code>undefined</code>) to the object as done in the example.
 *
 * @exception {DeveloperError} This object was destroyed, i.e., destroy() was called.
 *
 *
 * @example
 * controller = controller && controller.destroy();
 *
 * @see ScreenSpaceCameraController#isDestroyed
 */ ScreenSpaceCameraController.prototype.destroy = function() {
    this._tweens.removeAll();
    this._aggregator = this._aggregator && this._aggregator.destroy();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$cesium$2f$core$2f$Source$2f$destroyObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__destroyObject$3e$__["destroyObject"])(this);
};
const __TURBOPACK__default__export__ = ScreenSpaceCameraController;
}),
]);

//# sourceMappingURL=1q96_modules_%40cesium_engine_Source_Scene_ScreenSpaceCameraController_1_d5vh9pitq2m.js.map