import React from "react";

export default function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <p>🌡 {weather.main.temp}°C</p>
      <p>☁ {weather.weather[0].description}</p>
    </div>
  );
}
