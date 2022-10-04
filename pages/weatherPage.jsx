import { useEffect, useState } from "react";
import Forecast from "../components/weather/forecast";

const WeatherPage = () => {
  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState("Tokyo");
  const [weather, setWeather] = useState();

  const handleClick = (name) => {
    setSelectedCity(name);
  };

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital/")
      .then((response) => response.json())
      .then((response) => {
        setCities(response);
      })
      .catch((err) => console.error(err));
    // console.log(cities);
  }, []);

  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=0fd8ae9d5247af3922b8324c7aeac035&query=${selectedCity}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setWeather(response);
      })
      .catch((err) => console.error(err));
    console.log(weather);
  }, [selectedCity]);

  if (!cities || !weather) {
    return <div>Loading...</div>;
  }
  console.log(weather);
  return (
    <div>
      {" "}
      <Forecast cities={cities} weather={weather} handleClick={handleClick} />
    </div>
  );
};

export default WeatherPage;
