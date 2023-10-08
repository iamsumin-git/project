import { Button, Dialog, Divider } from '@mui/material';
import L, { LatLng } from 'leaflet';
import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { useFlatStore } from '@/store/flatStore';

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});

interface IProps {
  onLocationChoose?: (geo: number[]) => void;
  onClose?: () => void;
}

function LocationMarker({
  onPositionChange,
}: {
  onPositionChange?: (pos: L.LatLng) => void;
}) {
  const [position, setPosition] = React.useState<any>(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e?.latlng);
      onPositionChange?.(e?.latlng);
      // map.locate() // for detecting user location
    },
    // locationfound(e) {
    // const { lat, lng } = e.latlng;
    // setPosition(e?.latlng)
    // L.marker([lat, lng], { icon }).addTo(map);
    // map.flyTo(e?.latlng, map.getZoom())
    // },
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      {/* <Popup>You are here</Popup> */}
    </Marker>
  );
}

export default function GeoPickerModal({ onLocationChoose, onClose }: IProps) {
  const [position, setPosition] = React.useState<LatLng | null>(null);
  const [selectedAddress, setSelectedAddress] = React.useState('');

  const { flatGeo, setFlatGeo, setFlatMapLocation } = useFlatStore();

  const [open, setOpen] = useState(false);
  const handleGeoSelected = () => {
    if (!position) return;
    onLocationChoose?.([position?.lat, position?.lng]);
    setFlatGeo([position.lat, position.lng]);
    onClose?.();
    setOpen(false);
  };

  React.useEffect(() => {
    const fetchAddress = async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position?.lat}&lon=${position?.lng}`
      );
      const location = await res.json();
      setSelectedAddress(location?.display_name);
      setFlatMapLocation(location?.display_name);
    };

    fetchAddress();
  }, [position]);

  React.useEffect(() => {
    // !on modal pop, ask for locaiton permission to get current location
    //
    return () => setPosition(null);
  }, []);
  return (
    <>
      <div>
        <Button onClick={() => setOpen(true)} variant='outlined'>
          Pin On Map
        </Button>
        <Dialog
          open={open}
          fullWidth
          maxWidth='lg'
          onClose={() => setOpen(false)}
        >
          <div className=' h-full w-full p-9 '>
            <h2 className=' text-primary-main mb-3 text-2xl font-semibold'>
              Pin Location on Map
            </h2>
            <Divider />

            <MapContainer
              className='Map !h-[60vh] md:max-h-[70vh]'
              center={[27.7172, 85.324]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <LocationMarker onPositionChange={setPosition} />
            </MapContainer>

            <div className='text-primary-main my-5 px-9 text-sm'>
              <span className='text-sm font-semibold'>Selected Address </span>:{' '}
              <span>{selectedAddress}</span>
            </div>
            <div className='flex gap-9 space-x-4 px-9 py-9'>
              {position && (
                <Button
                  onClick={handleGeoSelected}
                  variant='contained'
                  className='mt-2 w-1/2'
                >
                  Choose Picked Location
                </Button>
              )}
              <Button
                color='error'
                onClick={() => setOpen(false)}
                variant='outlined'
                className='mt-2 w-1/2'
              >
                Cancel
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
