import L from 'leaflet';
import mapmarkericon from '../assets/icon-location.svg'

const MapMarkerIcon = new L.Icon({
    iconUrl: mapmarkericon,
    iconRetinaUrl: mapmarkericon,
    popupAnchor:  [-0, -0],
    iconSize: new L.Point(30, 40),
    // className: 'leaflet-div-icon'
});

export { MapMarkerIcon };