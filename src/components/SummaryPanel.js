import { Splitter, SplitterPanel } from "primereact/splitter";

export default function SummaryPanel({ isRendered, summary }) {
  if (!isRendered || !summary) return null;

  return (
    <section className="summary-overlay" aria-label="Lunar site summary">
      <header className="summary-header">
        <h2>Site summary</h2>
        <div className="summary-overview">
          <span>
            <strong>Selected:</strong> {formatUtc(summary.selectedTime)}
          </span>
          <span>
            <strong>Window:</strong> {formatUtc(summary.timeWindow.start)} –{" "}
            {formatUtc(summary.timeWindow.end)}
          </span>
          <span>
            <strong>Site:</strong>{" "}
            Lat {formatCoordinate(summary.closestMoonToEarth.latitude)}, Lon{" "}
            {formatCoordinate(summary.closestMoonToEarth.longitude)}
          </span>
        </div>
      </header>

      <Splitter className="summary-splitter" style={{ height: "250px" }}>
        <SplitterPanel className="summary-target">
          <h3>Earth visibility</h3>
          <dl>
            <Metric
              label="Elevation"
              value={formatAngle(summary.earth.elevation, summary.earth.elevationDifference)}
            />
            <Metric
              label="Azimuth"
              value={formatAngle(summary.earth.azimuth, summary.earth.azimuthDifference)}
            />
            <Metric
              label="Closest elevation target"
              value={formatUtc(summary.earth.closestElevationTime)}
            />
            <Metric
              label="Closest azimuth target"
              value={formatUtc(summary.earth.closestAzimuthTime)}
            />
            <Metric
              label="Communication duration"
              value={formatDuration(summary.communicationDuration)}
            />
            <Metric
              className="summary-window"
              label="Communication window"
              value={summary.communicationTimeWindow}
            />
          </dl>
        </SplitterPanel>

        <SplitterPanel className="summary-target">
          <h3>Sunlight</h3>
          <dl>
            <Metric
              label="Elevation"
              value={formatAngle(summary.sun.elevation, summary.sun.elevationDifference)}
            />
            <Metric
              label="Azimuth"
              value={formatAngle(summary.sun.azimuth, summary.sun.azimuthDifference)}
            />
            <Metric
              label="Closest elevation target"
              value={formatUtc(summary.sun.closestElevationTime)}
            />
            <Metric
              label="Closest azimuth target"
              value={formatUtc(summary.sun.closestAzimuthTime)}
            />
            <Metric
              label="Sunlight duration"
              value={formatDuration(summary.sunlightDuration)}
            />
            <Metric
              className="summary-window"
              label="Sunlight window"
              value={summary.sunlightTimeWindow}
            />
          </dl>
        </SplitterPanel>
      </Splitter>
    </section>
  );
}

function Metric({ label, value, className = "" }) {
  return (
    <div className={className}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function formatAngle(value, difference) {
  if (value == null || difference == null) return "—";
  const delta = difference >= 0 ? `+${difference.toFixed(1)}` : difference.toFixed(1);
  return `${value.toFixed(1)}° (Δ ${delta}°)`;
}

function formatCoordinate(value) {
  return `${value.toFixed(3)}°`;
}

function formatDuration(milliseconds) {
  const totalMinutes = Math.round(milliseconds / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
}

function formatUtc(value) {
  if (!value) return "—";
  return `${new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(value))} UTC`;
}
