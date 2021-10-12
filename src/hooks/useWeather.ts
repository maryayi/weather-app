import { useState } from "react";

export function useWeather(initialState: any = null): [any, (cityName: string) => any, boolean] {
  const [weather, setWeather] = useState<any>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (cityName: string) => {
    let result = null;
    setLoading(true);
    result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then(resp => resp.json());
    setLoading(false);
    setWeather(result);
  }

  return [weather, fetchWeather, loading]
}