import { Panel } from "primereact/panel";
import { ScrollPanel } from "primereact/scrollpanel";
import { Card } from "primereact/card";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import SliderComponent from "./SliderComponent";

export default function SidePanel() {
  const [briValue, setBriValue] = useState(80);
  const [commValue, setCommValue] = useState(80);
  return (
    <Panel header="Landing Sites">
      <p class="title">Brightness</p>
      <SliderComponent></SliderComponent>

      <p class="title">Communication</p>
      <SliderComponent></SliderComponent>

      <ScrollPanel style={{ width: "100%", height: "200px" }}>
        <div className="card">
          <Card title="Landing Site Name">
            <p className="m-0">Type</p>
            <p className="m-0">Lat - Lon</p>
            <p className="m-0">desc</p>
          </Card>
        </div>
      </ScrollPanel>
    </Panel>

    /*<Button
      label="Random location"
      icon="pi pi-map-marker"
      onClick={() =>
        withViewer((C, v) => {
          const longitude = Math.random() * 360 - 180;
          const latitude = (Math.asin(Math.random() * 2 - 1) * 180) / Math.PI;
          standOn(
            C,
            v,
            C.Cartesian3.fromDegrees(longitude, latitude, 0, C.Ellipsoid.MOON),
          );
        })
      }
    />*/
  );
}
