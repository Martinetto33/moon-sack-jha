import { describe, expect, it } from "vitest";
import { MoonDataDTO, TARGET_PLANETS } from "../app/api/MoonData.js";
import { SummaryCreator } from "../app/api/Summary.js";

const row = (target, time, azimuth, elevation) =>
    new MoonDataDTO(target, new Date(time), azimuth, elevation, false, false);

function createSummary(moonToEarthDTOs, moonToSunDTOs) {
    return new SummaryCreator({
        latitude: 12.5,
        longitude: -45.25,
        startTime: new Date("2026-11-14T22:00:00Z"),
        endTime: new Date("2026-11-15T04:00:00Z"),
        moonToEarthDTOs,
        moonToSunDTOs,
        wantedTargets: {
            earth: { elevation: 5, azimuth: 0 },
            sun: { elevation: 5, azimuth: 180 },
        },
    });
}

describe("SummaryCreator", () => {
    it("creates a frozen summary with selected values and target differences", () => {
        const earth = [
            row(TARGET_PLANETS.EARTH, "2026-11-15T00:00:00Z", 359, 4),
            row(TARGET_PLANETS.EARTH, "2026-11-15T01:00:00Z", 10, 10),
        ];
        const sun = [
            row(TARGET_PLANETS.SUN, "2026-11-15T00:00:00Z", 179, 2),
            row(TARGET_PLANETS.SUN, "2026-11-15T01:00:00Z", 200, 8),
        ];

        const dto = createSummary(earth, sun).selectTime(
            new Date("2026-11-15T00:10:00Z"),
        );

        expect(dto.closestMoonToEarth).toEqual({ latitude: 12.5, longitude: -45.25 });
        expect(dto.closestMoonToSun).toEqual({ latitude: 12.5, longitude: -45.25 });
        expect(dto.earth).toMatchObject({
            elevation: 4,
            elevationDifference: -1,
            azimuth: 359,
            azimuthDifference: -1,
        });
        expect(dto.sun).toMatchObject({
            elevation: 2,
            elevationDifference: -3,
            azimuth: 179,
            azimuthDifference: -1,
        });
        expect(dto.earth.closestElevationTime).toBe("2026-11-15T00:00:00.000Z");
        expect(dto.earth.closestAzimuthTime).toBe("2026-11-15T00:00:00.000Z");
        expect(dto.sun.closestElevationTime).toBe("2026-11-15T00:00:00.000Z");
        expect(dto.sun.closestAzimuthTime).toBe("2026-11-15T00:00:00.000Z");
        expect(Object.isFrozen(dto)).toBe(true);
        expect(Object.isFrozen(dto.earth)).toBe(true);
        expect(Object.isFrozen(dto.closestMoonToEarth)).toBe(true);
    });

    it("finds closest azimuth by circular distance", () => {
        const earth = [
            row(TARGET_PLANETS.EARTH, "2026-11-15T00:00:00Z", 359, 0),
            row(TARGET_PLANETS.EARTH, "2026-11-15T01:00:00Z", 180, 0),
        ];
        const creator = createSummary(earth, []);

        expect(creator.findClosestAzimuth(TARGET_PLANETS.EARTH, 0)).toBe(earth[0]);
    });

    it("interpolates visibility durations and clips windows to the selected UTC day", () => {
        const earth = [
            row(TARGET_PLANETS.EARTH, "2026-11-14T23:00:00Z", 0, -10),
            row(TARGET_PLANETS.EARTH, "2026-11-15T01:00:00Z", 0, 10),
            row(TARGET_PLANETS.EARTH, "2026-11-15T03:00:00Z", 0, -10),
        ];
        const sun = [
            row(TARGET_PLANETS.SUN, "2026-11-14T22:00:00Z", 0, -10),
            row(TARGET_PLANETS.SUN, "2026-11-15T00:00:00Z", 0, 10),
            row(TARGET_PLANETS.SUN, "2026-11-15T02:00:00Z", 0, 10),
            row(TARGET_PLANETS.SUN, "2026-11-15T04:00:00Z", 0, -10),
        ];

        const dto = createSummary(earth, sun).selectTime(
            new Date("2026-11-15T00:30:00Z"),
        );

        expect(dto.communicationDuration).toBe(2 * 60 * 60 * 1000);
        expect(dto.communicationTimeWindow).toBe(
            "2026-11-15 00:00:00 UTC - 2026-11-15 02:00:00 UTC",
        );
        expect(dto.sunlightDuration).toBe(4 * 60 * 60 * 1000);
        expect(dto.sunlightTimeWindow).toBe(
            "2026-11-15 00:00:00 UTC - 2026-11-15 03:00:00 UTC",
        );
    });

    it("reports query-window duration separately from visibility on the selected day", () => {
        const earth = [
            row(TARGET_PLANETS.EARTH, "2026-11-15T00:00:00Z", 0, -10),
            row(TARGET_PLANETS.EARTH, "2026-11-15T23:00:00Z", 0, -10),
            row(TARGET_PLANETS.EARTH, "2026-11-16T00:00:00Z", 0, -10),
            row(TARGET_PLANETS.EARTH, "2026-11-16T02:00:00Z", 0, 10),
            row(TARGET_PLANETS.EARTH, "2026-11-16T04:00:00Z", 0, -10),
        ];
        const creator = new SummaryCreator({
            latitude: 12.5,
            longitude: -45.25,
            startTime: new Date("2026-11-15T00:00:00Z"),
            endTime: new Date("2026-11-17T00:00:00Z"),
            moonToEarthDTOs: earth,
            moonToSunDTOs: [],
            wantedTargets: {
                earth: { elevation: 5, azimuth: 0 },
                sun: { elevation: 5, azimuth: 180 },
            },
        });

        const dto = creator.selectTime(new Date("2026-11-15T12:00:00Z"));

        expect(dto.communicationDuration).toBe(2 * 60 * 60 * 1000);
        expect(dto.communicationTimeWindow).toBe("No visibility");
    });
});
