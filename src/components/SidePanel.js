import { Panel } from "primereact/panel";
import { ScrollPanel } from "primereact/scrollpanel";
import { Card } from "primereact/card";

export default function SidePanel() {
  return (
    <Panel header="Landing Sites">
      <p>Brightness</p>
      <p>Communication</p>
      <ScrollPanel style={{ width: "100%", height: "200px" }}>
        <Card title="Simple Card">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
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
