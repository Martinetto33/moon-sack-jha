import React, { useEffect, useRef, useState } from "react";
import { parseLandingSites } from "./landingSites";

// File in public/resources/ caricati automaticamente all'avvio
const BASE_FILES = ["/sites/landing-sites-A3.geojson"];

export default function SidePanel({
  simulationSites,
  setSimulationSites,
  onFocusSite,
}) {
  // Every site from the loaded GeoJSON files.
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

  const addSiteToViewer = (site) => {
    if (simulationSites.some((s) => s.id === site.id)) {
      setStatus(`${site.name} is already in the simulation.`);
      return;
    }
    setSimulationSites((current) => [...current, site]);
    setStatus(`Added ${site.name} to the simulation.`);
  };

  const focusSite = (site) => {
    const [lon, lat] = representativePoint(site.geometry.coordinates);
    onFocusSite(lon, lat, site.name);
    setStatus(`Flying to ${site.name}.`);
  };

  return (
    <div className="side-panel">
      <h2 className="panel-header">Landing Sites</h2>
      <button onClick={() => fileInputRef.current.click()}>
        ➕ Add landing site
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".geojson,.json,application/geo+json,application/json"
        multiple
        hidden
        onChange={addLandingSites}
      />
      <div
        className="scroll-panel"
        style={{ width: "100%", height: "100%", overflowY: "auto" }}
      >
        {landingSites.map((site) => {
          const [lon, lat] = representativePoint(site.geometry.coordinates);
          return (
            <div className="card" key={site.id}>
              <h3 className="card-title">{site.name}</h3>
              <p className="m-0">{site.geometry.type}</p>
              <p className="m-0">
                {lat.toFixed(3)} - {lon.toFixed(3)}
              </p>
              <p className="m-0">
                {site.properties.desc ?? site.properties.description ?? ""}
              </p>
              <button
                className="add-button"
                onClick={() => {
                  addSiteToViewer(site);
                  focusSite(site);
                }}
              >
                + Add to simulation
              </button>
            </div>
          );
        })}
      </div>
    </div>
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
