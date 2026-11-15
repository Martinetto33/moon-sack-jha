import { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import * as Cesium from "cesium";

export default function DatePicker({ viewer }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    console.log("picked:", e.value);
    const selected = e.value;
    setDate(selected);
    if (viewer && selected) {
      viewer.clock.currentTime = Cesium.JulianDate.fromDate(selected);
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Button
        icon="pi pi-calendar"
      />
      {open && (
        <div className="mt-2">
          <Calendar
            value={date}
            onChange={handleChange}
            showTime
            hourFormat="24"
            dateFormat="dd/mm/yy"
            appendTo={document.body}
            />
        </div>
      )}
    </div>
  );
}