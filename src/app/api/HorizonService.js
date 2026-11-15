import { MoonDataDTO, TargetPlanet } from "./MoonData";

// https://ssd-api.jpl.nasa.gov/doc/horizons.html#stepping
export const TIME_UNITS = Object.freeze({
    MINUTE: Object.freeze('m'),
    HOUR: Object.freeze('h'),
    DAY: Object.freeze('d'),
    MONTH: Object.freeze('mo'),
    YEAR: Object.freeze('y')
});

/** @typedef {typeof TIME_UNITS[keyof typeof TIME_UNITS]} TimeUnit */

const API = "https://ssd.jpl.nasa.gov/api/horizons.api";
const quoted = v => `'${v}'`;
const toHorizonsTime = d => quoted(d.toISOString().slice(0, 16).replace("T", " ")); // UT
const normLon = lon => Number((((lon % 360) + 360) % 360).toFixed(6)); // map longitude to 0-360 range for correctness

export function buildUrl(target, latitude, longitude, startTime, stopTime, stepUnit, step) {
    const p = new URLSearchParams({
        format: "text",
        COMMAND: quoted(target.horizonsId),
        OBJ_DATA: quoted("NO"),
        MAKE_EPHEM: quoted("YES"),
        EPHEM_TYPE: quoted("OBSERVER"),
        CENTER: quoted("coord@301"),
        COORD_TYPE: quoted("GEODETIC"),
        SITE_COORD: quoted(`${normLon(longitude)},${latitude},0`),
        START_TIME: toHorizonsTime(startTime),
        STOP_TIME: toHorizonsTime(stopTime),
        STEP_SIZE: quoted(`${step} ${stepUnit}`),
        QUANTITIES: quoted("4"),
        ANG_FORMAT: quoted("DEG"),
    });
    return `${API}?${p}`;
}

/**
 * 
 * @param {TargetPlanet} target planet
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {Date} selectedTime 
 * @returns {string}
 */
export function buildUrlWithTwoMonthFrame(target, latitude, longitude, selectedTime) {
  const twoMonthsLater = new Date(date);
  twoMonthsLater.setMonth(selectedTime.getMonth() + 2);
  const p = new URLSearchParams({
        format: "text",
        COMMAND: quoted(target.horizonsId),
        OBJ_DATA: quoted("NO"),
        MAKE_EPHEM: quoted("YES"),
        EPHEM_TYPE: quoted("OBSERVER"),
        CENTER: quoted("coord@301"),
        COORD_TYPE: quoted("GEODETIC"),
        SITE_COORD: quoted(`${normLon(longitude)},${latitude},0`),
        START_TIME: toHorizonsTime(selectedTime),
        STOP_TIME: toHorizonsTime(twoMonthsLater),
        STEP_SIZE: quoted(`1 h`), // 1 hour step size
        QUANTITIES: quoted("4"),
        ANG_FORMAT: quoted("DEG"),
    });
    return `${API}?${p}`;
}

/** 
 * Returns data for the specified time window, at the specified stepping rate.
 * The input data is interpreted as follows:
 * - target: either the Earth as seen from the Moon or the Sun as seen from the Moon
 * - latitude and longitude represent a landing site on the moon
 * - startTime and stopTime represent the time window for which to return data
 * - stepUnit and step represent the stepping size, or 'frequency', at which to sample the return data
 * (e.g., return data inside the window sampling every 10 minutes, or every day, etc)
 * Returns a collection of {@link MoonDataDTO}, which represent the azimuth and the elevation of the target
 * from the apparent horizon visible from the landing site
 * 
 * @param {TargetPlanet} target the target for which to fetch data
 * @param {number} latitude the latitude on the Moon
 * @param {number} longitude the longitude on the Moon
 * @param {Date} startTime the start window for which to fetch data
 * @param {Date} stopTime the end window for which to fetch data
 * @param {TimeUnit} stepUnit the stepping unit (e.g., day, month, year...)  
 * @param {number} step the step amount (e.g., 1, 2, 3...)
 * @returns {Promise<MoonDataDTO[]>} 
 * */
export async function getForLatAndLong(target, latitude, longitude, startTime, stopTime, stepUnit, step) {
    const response = await fetch(buildUrl(target, latitude, longitude, startTime, stopTime, stepUnit, step));
    const text = await response.text();
    if (!response.ok) throw new Error(`Horizons HTTP ${response.status}: ${text.slice(0, 300)}`);
    return parseHorizonsRows(text, target);   // let errors propagate
}

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                 Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };

/**
 * @param {string} text Raw Horizons response (format=text)
 * @param {TargetPlanet} target 
 * @returns {MoonDataDTO[]}
 */
export function parseHorizonsRows(text, target) {
  const start = text.indexOf('$$SOE');
  const end = text.indexOf('$$EOE');
  if (start === -1 || end === -1 || end < start) {
    throw new Error('No $$SOE...$$EOE block found (check the API response for an error message)');
  }

  return text
    .slice(start + '$$SOE'.length, end)
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const tokens = line.split(/\s+/);
      const [dateStr, timeStr] = tokens;                  // "2026-Nov-14", "06:00"
      const elevation = parseFloat(tokens[tokens.length - 1]);
      const azimuth = parseFloat(tokens[tokens.length - 2]);
      const flags = tokens.slice(2, -2).join('');         // "", "*", "i", "*i"

      const [y, mon, d] = dateStr.split('-');
      const [hh, mm] = timeStr.split(':').map(Number);
      const time = new Date(Date.UTC(+y, MONTHS[mon], +d, hh, mm)); // times are UT

      if (!(mon in MONTHS) || Number.isNaN(azimuth) || Number.isNaN(elevation)) {
        throw new Error(`Unparseable row: "${line}"`);
      }

      return new MoonDataDTO(target, time, azimuth, elevation,
                       flags.includes("*"), flags.includes("i"));
    });
}