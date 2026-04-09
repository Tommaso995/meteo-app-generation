import React from "react";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const { data, error, loading, fetchWeather } = useWeather();

  return (
    <div className="container">
      <h1>Meteo App</h1>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Inserisci città"
      />

      <button onClick={() => fetchWeather(city)}>Cerca</button>

      {loading && <p>Caricamento...</p>}
      {error && <p className="error">{error}</p>}
      {data && <WeatherCard weather={data} />}
    </div>
  );
}
