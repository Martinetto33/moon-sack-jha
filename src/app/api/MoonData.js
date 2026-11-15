export const TARGET_PLANETS = Object.freeze({
    SUN:   Object.freeze({ name: 'Sun',   horizonsId: '10'  }),
    EARTH: Object.freeze({ name: 'Earth', horizonsId: '399' }),
});

/** @typedef {typeof TARGET_PLANETS[keyof typeof TARGET_PLANETS]} TargetPlanet */

export class MoonDataDTO {
    /**
     * @param {TargetPlanet} target
     * @param {Date} time UT
     * @param {number} azimuth degrees, clockwise from north
     * @param {number} elevation degrees above the smooth-sphere horizon
     * @param {boolean} sunUp Horizons '*' flag (upper limb of Sun up)
     * @param {boolean} interfererUp Horizons 'i' flag (see header: Earth for a Sun query)
     */
    constructor(target, time, azimuth, elevation, sunUp, interfererUp) {
        this.target = target;
        this.time = time;
        this.azimuth = azimuth;
        this.elevation = elevation;
        this.sunUp = sunUp;
        this.interfererUp = interfererUp;
    }
}