import { describe, it, expect } from "vitest";
import fs from "node:fs";
import { parseLandingSites } from "../components/landingSites.js";

const a3 = fs.readFileSync(
  new URL("../resources/A3_landing_regions.geojson", import.meta.url), "utf8");

describe("parseLandingSites", () => {
  const sites = parseLandingSites(a3, "A3_landing_regions.geojson");

  it("reads all 13 A3 regions", () => expect(sites).toHaveLength(13));

  it("first site", () => {
    expect(sites[0].id).toBe("A3_landing_regions.geojson#0");
    expect(sites[0].name).toBe("Amundsen Rim");
    expect(sites[0].source).toBe("A3_landing_regions.geojson");
    expect(sites[0].geometry.type).toBe("Polygon");
  });

  it("falls back to properties.name, then to the file name", () => {
    const point = (properties) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [0, 0] },
      properties,
    });
    const text = JSON.stringify({
      type: "FeatureCollection",
      features: [point({ name: "Apollo 11" }), point(null)],
    });
    expect(parseLandingSites(text, "f.json").map((s) => s.name)).toEqual([
      "Apollo 11",
      "f.json 2",
    ]);
  });

  it("rejects files that are not GeoJSON or have no sites", () => {
    expect(() => parseLandingSites("not json", "a")).toThrow();
    expect(() => parseLandingSites('{"type":"Point"}', "b")).toThrow();
    expect(() =>
      parseLandingSites('{"type":"FeatureCollection","features":[]}', "c"),
    ).toThrow("no landing sites");
  });
});
