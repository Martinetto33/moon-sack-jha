import { useLayoutEffect, useRef, useState } from "react";

export default function useDraggablePanel(layoutKey) {
  const panelRef = useRef(null);
  const dragRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
  }, [layoutKey]);

  const onPointerDown = (event) => {
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

  const onPointerMove = (event) => {
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

  const onPointerUp = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) dragRef.current = null;
  };

  return {
    panelRef,
    position,
    dragHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}
