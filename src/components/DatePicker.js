import { useEffect, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import * as Cesium from 'cesium';

export default function TimelineDatePicker({ viewer }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (e) => {
    console.log("picked:", e.target.value);
    const selected = e.value;
    setDate(selected);
    if (viewer && selected) {
      viewer.clock.currentTime = Cesium.JulianDate.fromDate(selected);
    }
  };

  return (
    <Calendar
      value={date}
      onChange={handleChange}
      showTime
      hourFormat="24"
      dateFormat="dd/mm/yy"
      showIcon
      style={{position: "absolute", bottom: "2"}}
    />
  );
}