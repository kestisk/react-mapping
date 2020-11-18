import React, { useEffect } from "react";
import "./App.css";
import * as L from "leaflet";
import { MapContainer } from "./Modules/MapContainer";
import { data } from "./mock";
import ReactDOMServer from "react-dom/server";
import { PopupContent } from "./Components/PopupContent";
import edited from "./assets/images/edited.svg";
import Header from "./Layout/Header";
import Sider from "./Layout/Sider";
import { DepotType } from "./Components/type";
function App() {
  var markerIcon = L.icon({
    iconUrl: edited,
    popupAnchor: [215, -150],
  });

  useEffect(() => {
    const map = MapContainer("map");

    data.map((dt: DepotType) => {
      const mark: L.Marker<any> = L.marker(
        [parseFloat(dt.latitude), parseFloat(dt.longitude)],
        { icon: markerIcon }
      ).addTo(map);
      mark.bindPopup(
        ReactDOMServer.renderToString(<PopupContent depot={dt} />)
      );
    });
  });

  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <Sider />
        <div id="map" style={{ height: 600, width: "100%" }}></div>
      </div>
    </div>
  );
}
export default App;
