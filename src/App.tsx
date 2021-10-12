import { useEffect, useState, useCallback } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import { useWeather } from './hooks'
import { debounce } from './helpers'

function App() {
  const [weather, fetchWeather, loading] = useWeather();
  const [cityName, setCityName] = useState('');

  const debouncedFetchWeather = useCallback(debounce(fetchWeather, 500), []);
  useEffect(() => {
    debouncedFetchWeather(cityName);
  }, [cityName]);
  return (
    <div className="App">
      <h1 className="weather__title">Find weather of any city</h1>
      <input
        aria-label="city-input"
        placeholder="Enter city name..."
        className="weather__input"
        type="text"
        value={cityName}
        onChange={e => setCityName(e.target.value)}
      />
      <WeatherBox weather={weather} loading={loading} />
    </div>
  );
}

export default App;
