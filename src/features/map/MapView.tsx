import L from 'leaflet';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

export default function MapView({
  position = [27.7172, 85.324],
}: {
  position?: any;
}) {
  if (position && position.length !== 2) return <></>;
  // ! TODO: better approch to detect 2 geo points not available
  return (
    <div className='relative my-9 h-auto w-full'>
      <MapContainer
        className='Map '
        center={[27.7172, 85.324]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position as any} icon={icon} />
        {/* <Marker position={a} icon={icon} /> */}
      </MapContainer>
    </div>
  );
}
