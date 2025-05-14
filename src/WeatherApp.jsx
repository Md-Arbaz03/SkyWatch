import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Quito",
    temp: 15.34,
    tempMin: 8.03,
    tempMax: 19.54,
    feelsLike: 17.22,
    humidity: 71,
    weather: "overcast clouds",
  });

  let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
