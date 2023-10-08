import dynamic from 'next/dynamic';
import React from 'react';
const MapView = dynamic(() => import('@/features/map/MapView'), { ssr: false });

export default function MapTest() {
  return (
    <div>
      <MapView />
    </div>
  );
}
