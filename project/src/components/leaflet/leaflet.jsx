import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import image from "../../../public/image/location.png";
import zoomInc from "../../../public/image/car-money.png";


function Leaflet() {
  const [zoom, setZoom] = useState(5);

  const customIcon = new L.icon({
    iconUrl: image,
    iconSize: [40, 47],
    iconAnchor: [20, 45],
  });

  const position = {
    position: [300,300],
  }
  return(
      <MapContainer
        className="map__yandex"
        center={[55.7522200, 37.6155600]}
        zoom={zoom}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       

        <button className="map__plus" onClick={() => {
          setZoom(zoom + 1)}}></button>
        <div id="zoom">
          <ZoomControl position={"bottomright"} />
        </div>

        <Marker position={[55.7522200, 37.6155600]} icon={customIcon}/>
        <Marker position={[51.5405600, 46.0086100]} icon={customIcon}/>
        <Marker position={[39.9075000, 116.3972300]} icon={customIcon}/>
        <Marker position={[57.1522200, 65.5272200]} icon={customIcon}/>
        <Marker position={[54.9924400, 73.3685900]} icon={customIcon}/>
        <Marker position={[55.7887400, 49.1221400]} icon={customIcon}/>
      </MapContainer>
  )
}

export default Leaflet;
