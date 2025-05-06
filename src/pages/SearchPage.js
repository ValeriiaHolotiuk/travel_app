import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState(null);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 3) {
      setResults([]);
      return;
    }

    try {
      const res = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
          q: value,
          format: "json",
          addressdetails: 1,
          limit: 5,
        },
      });
      setResults(res.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const getWeather = async (lat, lon, name) => {
    console.log("Clicked:", name, lat, lon); // Debug
  
    if (!lat || !lon) {
      console.error("Missing coordinates:", lat, lon);
      return;
    }
  
    try {
      const apiKey = "3d1ff2933fb242a4438bc52d1de45001";
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat,
            lon,
            appid: apiKey,
            units: "metric",
          },
        }
      );
  
      console.log("Weather response:", res.data); // Debug
      setWeather(res.data);
      setResults([]);
      setQuery(name);
    } catch (error) {
      console.error("Weather API error:", error.response?.data || error.message);
    }
  };
  
  

  return (
    <div className="search-page" style={{ padding: "2rem" }}>
      <h2>Search Cities</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Enter city name"
        style={{ width: "300px", padding: "0.5rem" }}
      />
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {results.map((place) => (
  <li
    key={place.place_id}
    style={{
      border: "1px solid #ccc",
      padding: "0.5rem",
      marginTop: "0.5rem",
      cursor: "pointer",
    }}
    onClick={() =>
      getWeather(place.lat, place.lon, place.display_name)
    }
  >
    {place.display_name}
  </li>
))}

      </ul>

      {weather && (
  <div className="weather-card">
    <h3>Weather in {weather.name}</h3>
    <p className="weather-desc">
      <span role="img" aria-label="cloud">🌥️</span> {weather.weather[0].description}
    </p>
    <p>
      <span role="img" aria-label="thermometer">🌡️</span> Temperature: {weather.main.temp} °C
    </p>
    <p>
      <span role="img" aria-label="humidity">💧</span> Humidity: {weather.main.humidity}%
    </p>
    <p>
      <span role="img" aria-label="wind">💨</span> Wind: {weather.wind.speed} m/s
    </p>

    <hr />

    <div className="booking-section">
      <h4>Ready to travel?</h4>
      <p>
        <span role="img" aria-label="globe">🌍</span> Book your next vacation to {weather.name} now!
      </p>
      <button onClick={() => navigate("/book")}>
      <span role="img" aria-label="airplane">✈️</span> Book Now
      </button>

    </div>
  </div>
)}


    </div>
  );
};

export default SearchPage;

