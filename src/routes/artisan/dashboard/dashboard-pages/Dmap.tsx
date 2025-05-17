import { createFileRoute } from '@tanstack/react-router'

// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 6.5244,
//   lng: 3.3792
// };


export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/Dmap')(
  {
    component: MapView,
  },
)

function MapView() {
  return (
    <>
{/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers or other components here */}
      {/* </GoogleMap> */}
    {/* </LoadScript> */} 
    </>
  )
 
}




export default MapView;
