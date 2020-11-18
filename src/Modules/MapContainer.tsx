import * as L from "leaflet";

export function MapContainer(divId: string) {
  const map = L.map(divId).setView([52.05, -0.717], 15);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  return map;
}
