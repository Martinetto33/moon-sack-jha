import { Panel } from "primereact/panel";
import { ScrollPanel } from "primereact/scrollpanel";
import { Card } from "primereact/card";
import React, { useEffect, useRef, useState } from "react";
import SliderComponent from "./SliderComponent";
import { Button } from "primereact/button";

// File in public/resources/ caricati automaticamente all'avvio
const BASE_FILES = ["/sites/landing-sites-A3.geojson"];

export default function SidePanel() {
  // Every site from the loaded GeoJSON files (see parseLandingSites).
  const [landingSites, setLandingSites] = useState([]);
  const [status, setStatus] = useState("");
  const fileInputRef = useRef(null);

  // Caricamento automatico dei file base allo start
  useEffect(() => {
    let cancelled = false;

    const loadBaseFiles = async () => {
      const loaded = [];
      for (const path of BASE_FILES) {
        try {
          const res = await fetch(path);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const name = path.split("/").pop();
          loaded.push(...parseLandingSites(await res.text(), name));
        } catch (err) {
          if (!cancelled) setStatus(`Could not read ${path}: ${err.message}.`);
        }
      }
      if (!cancelled) setLandingSites(loaded);
    };

    loadBaseFiles();
    return () => {
      cancelled = true;
    };
  }, []);

  const addLandingSites = async (event) => {
    const files = [...event.target.files];
    event.target.value = ""; // so the same file can be picked again
    for (const file of files) {
      try {
        const sites = parseLandingSites(await file.text(), file.name);
        // Adding a file again replaces its sites.
        setLandingSites((current) => [
          ...current.filter((site) => site.source !== file.name),
          ...sites,
        ]);
        setStatus(`Added ${sites.length} landing sites from ${file.name}.`);
      } catch (err) {
        setStatus(`Could not read ${file.name}: ${err.message}.`);
      }
    }
  };

  return (
    <Panel header="Landing Sites">
      <p className="title">Brightness</p>
      <SliderComponent></SliderComponent>

      <p className="title">Communication</p>
      <SliderComponent></SliderComponent>

      <ScrollPanel style={{ width: "100%", height: "200px" }}>
        {landingSites.map((site) => {
          const [lon, lat] = representativePoint(site.geometry.coordinates);
          return (
            <div className="card" key={site.id}>
              <Card title={site.name}>
                <p className="m-0">{site.geometry.type}</p>
                <p className="m-0">
                  {lat.toFixed(3)} - {lon.toFixed(3)}
                </p>
                <p className="m-0">
                  {site.properties.desc ?? site.properties.description ?? ""}
                </p>
                <Button label="Submit" icon="pi pi-plus" />
              </Card>
            </div>
          );
        })}

        <button onClick={() => fileInputRef.current.click()}>
          ➕ Add landing site
        </button>
        <p className="m-0">{status}</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".geojson,.json,application/geo+json,application/json"
          multiple
          hidden
          onChange={addLandingSites}
        />
      </ScrollPanel>
    </Panel>
  );
}

/**
 * Restituisce un punto rappresentativo [lon, lat] della geometria
 * (per un Point è il punto stesso, per Polygon/LineString è la media dei vertici).
 */
function representativePoint(coordinates) {
  const pairs = [];
  const walk = (c) => {
    if (typeof c[0] === "number") pairs.push(c);
    else c.forEach(walk);
  };
  walk(coordinates);
  const n = pairs.length;
  const lon = pairs.reduce((sum, p) => sum + p[0], 0) / n;
  const lat = pairs.reduce((sum, p) => sum + p[1], 0) / n;
  return [lon, lat];
}

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
