import React, { useEffect, useState } from 'react';
import './App.css';

const WeatherBox = ({ weather = null }: { weather: any }) => {
  if (!weather) return null;
  if (weather?.message) return (
    <div className="weather-box__error">
      {weather.message}
    </div >
  )
  return (
    <div className='weather-box'>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className='weather-box__icon' />
      <p className="weather-box__description">
        {weather.weather[0].description}
      </p>
      <table>
        <tr>
          <th>temp</th>
          <td>{weather.main.temp}&#8451;</td>
        </tr>
        <tr>
          <th>temp max</th>
          <td>{weather.main.temp_max}&#8451;</td>
        </tr>
        <tr>
          <th>temp min</th>
          <td>{weather.main.temp_min}&#8451;</td>
        </tr>
      </table>
    </div>
  )
};

function useWeather(initialState: any = null): [any, (cityName: string) => any] {
  const [weather, setWeather] = useState<any>(initialState);

  const fetchWeather = async (cityName: string) => {
    let result = null;
    result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then(resp => resp.json());
    setWeather(result);
  }

  return [weather, fetchWeather]
}

function App() {
  const [weather, fetchWeather] = useWeather();
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    fetchWeather(cityName);
  }, [cityName]);
  return (
    <div className="App">
      <WeatherBox weather={weather} />
      <input type="text" value={cityName} onChange={e => setCityName(e.target.value)} />
    </div>
  );
}

export default App;
