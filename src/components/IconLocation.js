import L from 'leaflet';
import icon from '../assets/icon.svg';

export const IconLocation = L.icon({
    iconUrl: icon,
    iconSize: [35, 35], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});