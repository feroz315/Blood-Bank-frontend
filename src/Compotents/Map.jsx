import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
// import "./App.css";


const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCpRj67amZUxQc5yA9aQmNBsXu_9ShuKZs",
  });
  const center = useMemo(() => ({ lat: 24.860966, lng: 66.990501 }), []);

  return (
    <div className="maps">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 24.860966, lng: 66.990501 }} 
          icon={"../../public/images/green-dot.png"}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default Maps;