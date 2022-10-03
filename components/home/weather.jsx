const Weather = ({ city, weather, onClick }) => {
  console.log(weather);
  return (
    <div>
      <div className="weather">
        {city.data.map((city, key) => {
          return (
            <div key={key} onClick={() => onClick(city.name)}>
              {city.name}
            </div>
          );
        })}
      </div>
      <div className="">{(weather && weather.current.wind_speed) || "..."}</div>
    </div>
  );
};

export default Weather;
