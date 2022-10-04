import Image from "next/image";

const Forecast = ({ cities, weather, handleClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#e7e2a0",
        // height: "100vh",
      }}
    >
      <div className="left" style={{ width: "50%" }}>
        <p>Country: {weather.location.country}</p>
        <p>City: {weather.location.name}</p>
        <p>Temp: {weather.current.temperature}</p>
        <p>Wind direction: {weather.current.wind_dir}</p>
        <Image src={weather.current.weather_icons[0]} width={30} height={30} />
      </div>
      <div
        className="right"
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          height: "250px",
          overflow: "auto",
        }}
      >
        {cities.data.map((city) => (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleClick(city.capital);
            }}
          >
            {city.capital}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
