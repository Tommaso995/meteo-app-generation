import axios from "axios";

export const getWeatherByCity = async (city) => {
  // prima ottieni coordinate dalla città
  const geoRes = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: { name: city, count: 1 }
    }
  );

  if (!geoRes.data.results) {
    throw new Error("Città non trovata");
  }

  const { latitude, longitude, name } = geoRes.data.results[0];

  // poi meteo
  const weatherRes = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude,
        longitude,
        current_weather: true
      }
    }
  );

  return {
    name,
    main: { temp: weatherRes.data.current_weather.temperature },
    weather: [{ description: "Dati meteo attuali" }]
  };
};