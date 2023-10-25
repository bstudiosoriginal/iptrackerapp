// import { useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, useMap } from "react-leaflet";
import { MapMarkerIcon } from "./MapMarkerIcon";
import { useEffect } from "react";


interface FlyMapToProps {
  latitude: number;
  longitude: number;
}
function FlyMapTo({latitude, longitude}: FlyMapToProps) {

  const map = useMap()

  useEffect(() => {
    map.flyTo({lat: latitude, lng: longitude})
  }, [latitude, longitude])
  return null
}

interface MapViewProps {
  longitude: number;
  latitude: number;
}

const MapView = ({longitude, latitude} : MapViewProps) => {
  // const [position, _] = useState({lat: 5.6037, lng: -0.1873});
  
  const zoomlevel = 13;
  return (
    <MapContainer className="mapview" center={{lat: latitude, lng: longitude}} zoom={zoomlevel} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={{lat: latitude, lng: longitude}} icon={MapMarkerIcon}>
        
      </Marker>
      <FlyMapTo latitude={latitude} longitude={longitude}/>
    </MapContainer>
  );
};

export default MapView;
