import React from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Markers = ({ places }) => {
  const markers = places.map((place, i) => (
    <Marker map={i} position={place.geometry} icon={IconLocation}>
      <Popup>
        Bicicletas disponibles: <br /> <span style={{color:'red', font:'bold'}}>{place.bikes_aviables}</span>
      </Popup>
    </Marker>
  ));
  return markers;
};

export default Markers;
