import React, { useState } from "react";
import Map from "./Map";

const App = () => {
  const [distance, setDistance] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          location
        )}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates({ lat, lng });
        console.log("Coordinates:", lat, lng);
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching geocode:", error);
    }
  };

  return (
    <div>
      <h1>Google Maps Demo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter starting location:
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </label>
        <br />
        <label>
          Enter desired distance (in km):
          <input
            type="number"
            value={distance}
            onChange={handleDistanceChange}
            required
          />
        </label>
        <button type="submit">Generate Route</button>
      </form>
      <Map coordinates={coordinates} />
    </div>
  );
};

export default App;