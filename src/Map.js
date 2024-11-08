import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const Map = ({ coordinates }) => {
  con
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates || defaultCenter}
        zoom={12}
      >
        {/* Additional map components can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;