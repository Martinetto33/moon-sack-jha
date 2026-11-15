/**
 * Reads the landing sites in a GeoJSON file, one per feature with a geometry:
 * { id, name, source, geometry, properties }, coordinates in degrees [lon, lat].
 * Throws if the file is not a GeoJSON Feature or FeatureCollection with sites.
 */
export function parseLandingSites(text, source) {
  const geojson = JSON.parse(text);
  const features =
    geojson?.type === "FeatureCollection"
      ? geojson.features
      : geojson?.type === "Feature"
        ? [geojson]
        : undefined;
  if (!Array.isArray(features)) {
    throw new Error("not a GeoJSON Feature or FeatureCollection");
  }

  const sites = features.flatMap((feature, index) =>
    feature?.geometry?.coordinates
      ? [
          {
            id: `${source}#${feature.id ?? index}`,
            name:
              feature.properties?.label ??
              feature.properties?.name ??
              `${source} ${index + 1}`,
            source,
            geometry: feature.geometry,
            properties: feature.properties ?? {},
          },
        ]
      : [],
  );
  if (sites.length === 0) throw new Error("no landing sites in the file");
  return sites;
}
