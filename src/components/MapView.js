import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
//import * as ELG from "esri-leaflet-geocoder";

import { ChangeView } from './ChangeView';
import { useLocation, useHistory } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import venues from "../places.json";


const MapView = () => {
  const token =
    "pk.eyJ1IjoiZWRraWxsYWgiLCJhIjoiY2tsM3k0ZzBnMGF3MjJvanUyYjRmdDQzZSJ9.4UIPAYjND8HNAZEsCa8e4A";
  const url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`;

  const [state, setState] = useState({
    currentLocation: { lat: "4.749544550914576", lng: "-74.0497417525758" }    
  });

  const location = useLocation();
  const latitude = location.state.latitude;
  const longitude = location.state.longitude;  
  const history = useHistory();

  useEffect(() => {
    if (latitude && longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };

      setState({ ...state, currentLocation });
  
      history.replace({ pathname: "/map", state: {} });
    }
  }, []);

  

  return (    
    <MapContainer center={state.currentLocation} zoom={15}>
      <ChangeView center={state.currentLocation} zoom={15} />
      <TileLayer
        url={url}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        id="mapbox/streets-v11"
      />
      
      <Markers places={venues.venues} />
    </MapContainer>
  );
};

export default MapView;
