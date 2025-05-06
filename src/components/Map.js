import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = () => {
    useEffect(() => {
        if (L.DomUtil.get("map") != null) {
          L.DomUtil.get("map")._leaflet_id = null;
        }
      
        const map = L.map("map").setView([45.4215, -75.6972], 13);
      
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);
      
        L.Routing.control({
          waypoints: [
            L.latLng(45.4215, -75.6972),
            L.latLng(45.4315, -75.6872),
          ],
          routeWhileDragging: true,
        }).addTo(map);
      }, []);
      

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default Map;
