import { useLayoutEffect, useRef, useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";

export default function SummaryPanel({ isRendered, summary }) {
  const panelRef = useRef(null);
  const dragRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const bounds = panel.getBoundingClientRect();
    const shiftX =
      Math.min(0, window.innerWidth - 8 - bounds.right) +
      Math.max(0, 8 - bounds.left);
    const shiftY =
      Math.min(0, window.innerHeight - 8 - bounds.bottom) +
      Math.max(0, 8 - bounds.top);

    if (shiftX || shiftY) {
      setPosition((current) => ({
        x: current.x + shiftX,
        y: current.y + shiftY,
      }));
    }
  }, [isMinimized]);

  if (!isRendered || !summary) return null;

  const startDrag = (event) => {
    if (!event.isPrimary || event.button !== 0 || event.target.closest("button")) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const bounds = panelRef.current.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      position,
      minX: 8 - bounds.left,
      maxX: window.innerWidth - 8 - bounds.right,
      minY: 8 - bounds.top,
      maxY: window.innerHeight - 8 - bounds.bottom,
    };
  };

  const movePanel = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    setPosition({
      x:
        drag.position.x +
        clamp(event.clientX - drag.pointerX, drag.minX, drag.maxX),
      y:
        drag.position.y +
        clamp(event.clientY - drag.pointerY, drag.minY, drag.maxY),
    });
  };

  const stopDrag = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  };

  return (
    <section
      ref={panelRef}
      className="summary-overlay"
      aria-label="Lunar site summary"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <header
        className="summary-header"
        onPointerDown={startDrag}
        onPointerMove={movePanel}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <h2>Site summary</h2>
        <button
          type="button"
          className="summary-toggle"
          aria-label={isMinimized ? "Restore summary panel" : "Minimize summary panel"}
          aria-expanded={!isMinimized}
          onClick={() => setIsMinimized((minimized) => !minimized)}
        >
          <i className={`pi ${isMinimized ? "pi-plus" : "pi-minus"}`} aria-hidden="true" />
        </button>
      </header>

      {!isMinimized && (
        <>
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

          <Splitter className="summary-splitter" style={{ height: "250px" }}>
            <SplitterPanel className="summary-target">
              <h3>Earth visibility</h3>
              <dl>
                <Metric
                  label="Elevation"
                  value={formatAngle(
                    summary.earth.elevation,
                    summary.earth.elevationDifference,
                  )}
                />
                <Metric
                  label="Azimuth"
                  value={formatAngle(
                    summary.earth.azimuth,
                    summary.earth.azimuthDifference,
                  )}
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
                  value={formatAngle(
                    summary.sun.elevation,
                    summary.sun.elevationDifference,
                  )}
                />
                <Metric
                  label="Azimuth"
                  value={formatAngle(
                    summary.sun.azimuth,
                    summary.sun.azimuthDifference,
                  )}
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
        </>
      )}
    </section>
  );
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
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
