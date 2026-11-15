import { useEffect } from "react";
import * as Cesium from "cesium";

// Moon mean radius in metres. Without this, Cesium would place the
// coordinates on Earth's ellipsoid.
const MOON_ELLIPSOID = new Cesium.Ellipsoid(1737400, 1737400, 1737400);

function toFlatDegrees(coordinates) {
  const out = [];
  const walk = (c) => {
    if (typeof c[0] === "number") out.push(c[0], c[1]);
    else c.forEach(walk);
  };
  walk(coordinates);
  return out;
}

function createEntityOptions(site) {
  const { type, coordinates } = site.geometry;

  if (type === "Point") {
    const [lon, lat, height = 0] = coordinates;
    return {
      id: site.id,
      name: site.name,
      position: Cesium.Cartesian3.fromDegrees(lon, lat, height, MOON_ELLIPSOID),
      point: {
        pixelSize: 10,
        color: Cesium.Color.CYAN,
        outlineColor: Cesium.Color.BLACK,
        outlineWidth: 2,
      },
    };
  }

  const positions = Cesium.Cartesian3.fromDegreesArray(
    toFlatDegrees(coordinates),
    MOON_ELLIPSOID,
  );
  return {
    id: site.id,
    name: site.name,
    polygon: {
      hierarchy: new Cesium.PolygonHierarchy(positions),
      material: Cesium.Color.ORANGE.withAlpha(0.4),
      outline: true,
      outlineColor: Cesium.Color.ORANGE,
    },
  };
}

/**
 * Keeps the viewer's entities in sync with the simulation sites.
 * Renders nothing; it only manages Cesium entities.
 */
export default function SimulationSites({ viewer, sites }) {
  useEffect(() => {
    if (!viewer || viewer.isDestroyed()) return;

    const wantedIds = new Set(sites.map((site) => site.id));

    // Remove entities whose sites were taken out of the simulation.
    for (const entity of viewer.entities.values.slice()) {
      if (!wantedIds.has(entity.id)) viewer.entities.remove(entity);
    }

    // Add sites that are not yet on the map.
    for (const site of sites) {
      if (!viewer.entities.getById(site.id)) {
        viewer.entities.add(createEntityOptions(site));
      }
    }
  }, [viewer, sites]);

  return null;
}
