interface IWeatherBox {
  weather: any,
  loading: boolean,
}

const WeatherBox = ({ weather = null, loading = false }: IWeatherBox) => {
  if (loading) return (
    <div className="weather-box__error">
      Loading...
    </div >
  )
  if (!weather) return null;
  if (weather?.message) return (
    <div className="weather-box__error">
      {weather.message}
    </div >
  )
  return (
    <div className='weather-box'>
      <h2 className="weather-box__city">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="weather-box__result">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className='weather-box__icon' />
        <p className="weather-box__description">
          {weather.weather[0].description}
        </p>
      </div>
      <table className="weather-box__table">
        <tr>
          <th className="weather-box__table--cold">temp min</th>
          <td>{weather.main.temp_min}&#8451;</td>
        </tr>
        <tr>
          <th>temp</th>
          <td>{weather.main.temp}&#8451;</td>
        </tr>
        <tr>
          <th className="weather-box__table--hot">temp max</th>
          <td>{weather.main.temp_max}&#8451;</td>
        </tr>
      </table>
    </div>
  )
};

export default WeatherBox