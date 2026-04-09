import { useState } from "react";
import { getWeatherByCity } from "../services/weatherService";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const result = await getWeatherByCity(city);
      setData(result);
    } catch (e) {
      setError("Errore nel recupero dati");
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchWeather };
};
