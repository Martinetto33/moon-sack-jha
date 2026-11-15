import { TARGET_PLANETS } from "./MoonData.js";

const DAY_MS = 24 * 60 * 60 * 1000;

function toDate(value, name) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        throw new TypeError(`${name} must be a valid date`);
    }
    return date;
}

function toIsoString(value) {
    return value == null ? null : new Date(value).toISOString();
}

function signedAzimuthDifference(actual, wanted) {
    return ((actual - wanted + 540) % 360 + 360) % 360 - 180;
}

function getPositiveIntervals(moonData) {
    const samples = [...moonData].sort((a, b) => a.time - b.time);
    const intervals = [];

    for (let index = 1; index < samples.length; index++) {
        const previous = samples[index - 1];
        const current = samples[index];
        const start = previous.time.getTime();
        const end = current.time.getTime();
        if (end <= start) continue;

        const previousElevation = previous.elevation;
        const currentElevation = current.elevation;
        if (previousElevation <= 0 && currentElevation <= 0) continue;

        let visibleStart = start;
        let visibleEnd = end;
        if (previousElevation <= 0 || currentElevation <= 0) {
            const crossing =
                start +
                ((-previousElevation) / (currentElevation - previousElevation)) *
                    (end - start);
            if (previousElevation <= 0) visibleStart = crossing;
            else visibleEnd = crossing;
        }

        const last = intervals.at(-1);
        if (last && last.end >= visibleStart) last.end = visibleEnd;
        else intervals.push({ start: visibleStart, end: visibleEnd });
    }

    return intervals;
}

function formatUtc(value) {
    return new Date(value).toISOString().replace("T", " ").replace(".000Z", " UTC");
}

function intervalsInUtcDay(intervals, selectedTime) {
    const dayStart = Date.UTC(
        selectedTime.getUTCFullYear(),
        selectedTime.getUTCMonth(),
        selectedTime.getUTCDate(),
    );
    const dayEnd = dayStart + DAY_MS;

    return clipIntervals(intervals, dayStart, dayEnd);
}

function clipIntervals(intervals, startTime, endTime) {
    return intervals
        .map(({ start, end }) => ({
            start: Math.max(start, startTime),
            end: Math.min(end, endTime),
        }))
        .filter(({ start, end }) => end > start);
}

function formatIntervals(intervals) {
    if (intervals.length === 0) return "No visibility";
    return intervals
        .map(({ start, end }) => `${formatUtc(start)} - ${formatUtc(end)}`)
        .join("; ");
}

function targetSummary(selected, rows, wanted) {
    return Object.freeze({
        elevation: selected?.elevation ?? null,
        elevationDifference:
            selected == null ? null : selected.elevation - wanted.elevation,
        azimuth: selected?.azimuth ?? null,
        azimuthDifference:
            selected == null
                ? null
                : signedAzimuthDifference(selected.azimuth, wanted.azimuth),
        closestElevationTime: toIsoString(
            findClosest(rows, (candidate, best) =>
                Math.abs(candidate.elevation - wanted.elevation) <
                Math.abs(best.elevation - wanted.elevation),
            )?.time,
        ),
        closestAzimuthTime: toIsoString(
            findClosest(rows, (candidate, best) =>
                Math.abs(signedAzimuthDifference(candidate.azimuth, wanted.azimuth)) <
                Math.abs(signedAzimuthDifference(best.azimuth, wanted.azimuth)),
            )?.time,
        ),
    });
}

function findClosest(moonData, isCloser) {
    if (!moonData?.length) return null;

    return moonData.slice(1).reduce(
        (closest, candidate) => (isCloser(candidate, closest) ? candidate : closest),
        moonData[0],
    );
}

function visibilityDuration(intervals) {
    return intervals.reduce((duration, interval) => duration + interval.end - interval.start, 0);
}

/** Immutable, display-ready summary. Times are ISO strings and durations are milliseconds. */
export class SummaryDTO {
    constructor({
        latitude,
        longitude,
        startTime,
        endTime,
        selectedTime,
        earth,
        sun,
        sunlightDuration,
        sunlightTimeWindow,
        communicationDuration,
        communicationTimeWindow,
    }) {
        this.closestMoonToEarth = Object.freeze({ latitude, longitude });
        this.closestMoonToSun = Object.freeze({ latitude, longitude });
        this.timeWindow = Object.freeze({
            start: startTime.toISOString(),
            end: endTime.toISOString(),
        });
        this.selectedTime = selectedTime.toISOString();
        this.earth = earth;
        this.sun = sun;
        this.sunlightDuration = sunlightDuration;
        this.sunlightTimeWindow = sunlightTimeWindow;
        this.communicationDuration = communicationDuration;
        this.communicationTimeWindow = communicationTimeWindow;
        Object.freeze(this);
    }
}

export class SummaryCreator {
    /**
     * @param {object} options
     * @param {number} options.latitude Queried lunar-site latitude in degrees
     * @param {number} options.longitude Queried lunar-site longitude in degrees
     * @param {Date} options.startTime Start of the query window
     * @param {Date} options.endTime End of the query window
     * @param {import("./MoonData.js").MoonDataDTO[]} options.moonToEarthDTOs
     * @param {import("./MoonData.js").MoonDataDTO[]} options.moonToSunDTOs
     * @param {{earth: {elevation: number, azimuth: number}, sun: {elevation: number, azimuth: number}}} options.wantedTargets
     */
    constructor({
        latitude,
        longitude,
        startTime,
        endTime,
        moonToEarthDTOs,
        moonToSunDTOs,
        wantedTargets,
    }) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.startTime = toDate(startTime, "startTime");
        this.endTime = toDate(endTime, "endTime");
        if (this.endTime < this.startTime) {
            throw new RangeError("endTime must not be before startTime");
        }
        this.moonToEarth = moonToEarthDTOs;
        this.moonToSun = moonToSunDTOs;
        this.wantedTargets = wantedTargets;
    }

    selectTime(time) {
        const selectedTime = toDate(time, "selectedTime");
        const closestEarth = this._findClosestMoonDataByTime(
            this.moonToEarth,
            selectedTime,
        );
        const closestSun = this._findClosestMoonDataByTime(
            this.moonToSun,
            selectedTime,
        );
        const sunlightIntervals = clipIntervals(
            getPositiveIntervals(this.moonToSun),
            this.startTime.getTime(),
            this.endTime.getTime(),
        );
        const communicationIntervals = clipIntervals(
            getPositiveIntervals(this.moonToEarth),
            this.startTime.getTime(),
            this.endTime.getTime(),
        );

        return new SummaryDTO({
            latitude: this.latitude,
            longitude: this.longitude,
            startTime: this.startTime,
            endTime: this.endTime,
            selectedTime,
            earth: targetSummary(
                closestEarth,
                this.moonToEarth,
                this.wantedTargets.earth,
            ),
            sun: targetSummary(
                closestSun,
                this.moonToSun,
                this.wantedTargets.sun,
            ),
            sunlightDuration: visibilityDuration(sunlightIntervals),
            sunlightTimeWindow: formatIntervals(
                intervalsInUtcDay(sunlightIntervals, selectedTime),
            ),
            communicationDuration: visibilityDuration(communicationIntervals),
            communicationTimeWindow: formatIntervals(
                intervalsInUtcDay(communicationIntervals, selectedTime),
            ),
        });
    }

    findClosestElevation(targetPlanet, targetElevation) {
        return findClosest(
            this._moonDataFor(targetPlanet),
            (candidate, best) =>
                Math.abs(candidate.elevation - targetElevation) <
                Math.abs(best.elevation - targetElevation),
        );
    }

    findClosestAzimuth(targetPlanet, targetAzimuth) {
        return findClosest(
            this._moonDataFor(targetPlanet),
            (candidate, best) =>
                Math.abs(signedAzimuthDifference(candidate.azimuth, targetAzimuth)) <
                Math.abs(signedAzimuthDifference(best.azimuth, targetAzimuth)),
        );
    }

    _moonDataFor(targetPlanet) {
        if (targetPlanet === TARGET_PLANETS.EARTH) return this.moonToEarth;
        if (targetPlanet === TARGET_PLANETS.SUN) return this.moonToSun;
        throw new RangeError("targetPlanet must be Earth or Sun");
    }

    _findClosestMoonDataByTime(moonData, time) {
        return findClosest(
            moonData,
            (candidate, best) =>
                Math.abs(candidate.time - time) < Math.abs(best.time - time),
        );
    }
}
