import { createFileRoute } from '@tanstack/react-router'

import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
  borderRadius: "1rem",
};

const center = {
  lat: 6.5244, // Lagos coordinates
  lng: 3.3792,
};

const markers = [
  { lat: 6.550, lng: 3.379, label: "Dry cleaner" },
  { lat: 6.560, lng: 3.400, label: "Dry cleaner" },
  { lat: 6.510, lng: 3.360, label: "Dry cleaner" },
  { lat: 6.500, lng: 3.350, label: "Dry cleaner" },
  { lat: 6.470, lng: 3.350, label: "Dry cleaner" },
];


export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/Dmap')(
  {
    component: MapView,
  },
)

function MapView() {

  const [mapType, setMapType] = useState("roadmap");

  return (
    <>
<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <div className="relative w-[324px] h-[651px] mx-auto">
        {/* Search Input */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="bg-white rounded-full px-4 py-2 shadow flex items-center">
            <span className="material-icons text-gray-500 mr-2">search</span>
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-1 outline-none bg-transparent text-[14px]"
            />
            <span className="material-icons text-gray-500 ml-2 cursor-pointer">x</span>
          </div>
        </div>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          mapTypeId={mapType}
        >
          {markers.map((marker, idx) => (
            <Marker
              key={idx}
              position={{ lat: marker.lat, lng: marker.lng }}
              label={{
                text: marker.label,
                fontSize: "12px",
                color: "#00a000",
                fontWeight: "bold",
              }}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
              }}
            />
          ))}
        </GoogleMap>

        {/* Map Type Controls */}
        <div className="absolute bottom-4 left-4 flex gap-2 z-10">
          <button
            onClick={() => setMapType("roadmap")}
            className={`px-4 py-1 rounded bg-white shadow w-full ${
              mapType === "roadmap" ? "bg-green-600 text-white" : ""
            }`}
          >
            Map
          </button>
          <button
            onClick={() => setMapType("satellite")}
            className={`px-4 py-1 rounded bg-white shadow w-full ${
              mapType === "satellite" ? "bg-green-600 text-white" : " "
            }`}
          >
            Satellite
          </button>
        </div>
      </div>
    </LoadScript>
    </>
  )
 
}




export default MapView;
