import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "node:fs";
import { parseHorizonsRows, buildUrl, getForLatAndLong } from "../app/api/HorizonService.js";
import { TARGET_PLANETS } from "../app/api/MoonData.js";

const sample = fs.readFileSync(
  new URL("./fixtures/sun-apollo11.txt", import.meta.url), "utf8");

afterEach(() => vi.unstubAllGlobals());

describe("parseHorizonsRows", () => {
  const rows = parseHorizonsRows(sample, TARGET_PLANETS.SUN);

  it("reads all 5 rows", () => expect(rows).toHaveLength(5));

  it("first row values", () => {
    expect(rows[0].time.toISOString()).toBe("2026-11-14T00:00:00.000Z");
    expect(rows[0].azimuth).toBeCloseTo(91.441764, 5);
    expect(rows[0].elevation).toBeCloseTo(-13.158066, 5);
    expect(rows[0].target).toBe(TARGET_PLANETS.SUN);
  });

  it("elevation rises about 3.04° per 6 h", () => {
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i].elevation - rows[i - 1].elevation).toBeCloseTo(3.04, 1);
    }
  });

  it("handles rows with no flag and with '*i'", () => {
    const t = "$$SOE\n 2026-Nov-14 00:00      91.0 -5.0\n 2026-Nov-14 06:00 *i  92.0 5.0\n$$EOE";
    const r = parseHorizonsRows(t, TARGET_PLANETS.SUN);
    expect([r[0].sunUp, r[0].interfererUp]).toEqual([false, false]);
    expect([r[1].sunUp, r[1].interfererUp]).toEqual([true, true]);
  });

  it("throws without a $$SOE block", () =>
    expect(() => parseHorizonsRows("error text", TARGET_PLANETS.SUN)).toThrow());

  it("throws on a garbage row", () =>
    expect(() => parseHorizonsRows("$$SOE\n foo bar\n$$EOE", TARGET_PLANETS.SUN)).toThrow());
});

describe("buildUrl", () => {
  const start = new Date("2026-11-14T00:00Z");
  const stop = new Date("2026-11-15T00:00Z");

  it("builds the expected parameters", () => {
    const u = new URL(buildUrl(TARGET_PLANETS.SUN, 0.674, 23.473, start, stop, "h", 6));
    expect(u.searchParams.get("COMMAND")).toBe("'10'");
    expect(u.searchParams.get("SITE_COORD")).toBe("'23.473,0.674,0'");
    expect(u.searchParams.get("START_TIME")).toBe("'2026-11-14 00:00'");
    expect(u.searchParams.get("STEP_SIZE")).toBe("'6 h'");
  });

  it("uses Earth's ID for Earth", () => {
    const u = new URL(buildUrl(TARGET_PLANETS.EARTH, 0, 0, start, stop, "d", 1));
    expect(u.searchParams.get("COMMAND")).toBe("'399'");
  });

  it("converts negative longitude to 0-360", () => {
    const u = new URL(buildUrl(TARGET_PLANETS.SUN, -3.032, -23.4274, start, stop, "h", 6));
    const lon = parseFloat(u.searchParams.get("SITE_COORD").replace(/'/g, "").split(",")[0]);
    expect(lon).toBeCloseTo(336.5726, 4);
  });
});

describe("getForLatAndLong (mocked fetch)", () => {
  const args = [TARGET_PLANETS.SUN, 0.674, 23.473,
                new Date("2026-11-14T00:00Z"), new Date("2026-11-15T00:00Z"), "h", 6];

  it("returns parsed DTOs on success", async () => {
    vi.stubGlobal("fetch", async () => ({ ok: true, text: async () => sample }));
    const rows = await getForLatAndLong(...args);
    expect(rows).toHaveLength(5);
  });

  it("rejects on HTTP error", async () => {
    vi.stubGlobal("fetch", async () => ({ ok: false, status: 400, text: async () => "bad request" }));
    await expect(getForLatAndLong(...args)).rejects.toThrow(/400/);
  });
});

describe.skipIf(!process.env.LIVE)("live Horizons smoke test", () => {
  it("Apollo 11 matches the golden value", async () => {
    const rows = await getForLatAndLong(TARGET_PLANETS.SUN, 0.674, 23.473,
      new Date("2026-11-14T00:00Z"), new Date("2026-11-15T00:00Z"), "h", 6);
    expect(rows[0].elevation).toBeCloseTo(-13.158, 2);
  });
});