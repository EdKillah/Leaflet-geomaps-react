import React, { Component, useState, useEffect } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { geosearch } from 'esri-leaflet-geocoder';
import * as A from "esri-leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js";

// import marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png",
});

const MapLogic = () => {    


  const map = useMap();
  console.log("map on mapLogic: ", map);
  //this.leafletMap.leafletElement  
  

  useEffect(() => {    
    
    //const control = geosearch();
    const searchControl = new ELG.Geosearch().addTo(map);        
    //control.addTo(map);


    
    
    const results = new L.LayerGroup().addTo(map);
    
    searchControl.on("results", function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
          console.log("entrando aca: ", data.results[i].latlng)
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });    
    
  });

  return null;
};

const MapComp = () => {
  /*
  componentDidMount() {
    console.log("leafletMap: ", this.mapRef);        
    const map = this.mapRef.current.leafletElement;

    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function (data) {
      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }
*/

  const center = [4.6896560047566105, -74.07391344300756];

  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={center}
      zoom="15"

      /*
        ref={(m) => {
          this.leafletMap = m;
        }}
        {console.log("map new?: ",map)}
        */
    >
      <TileLayer
        attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
        url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
      <div className="pointer" />
      <MapLogic />
    </MapContainer>
  );
};

export default MapComp;
