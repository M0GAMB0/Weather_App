import { Progress } from "flowbite-react";
import React from "react";
import Card from "../Components/Card";
import HorizontalProgress from "../Components/HorizontalProgress";
import MiniCard from "../Components/MiniCard";
import { WeatherState } from "../WeatherContext";

const WeatherDisplay = () => {
  const { currentWeather, airQuality, currUnit } = WeatherState();

  const tempInCelsius = currentWeather.main.temp; // Assuming temp is in Celsius
  const temp =
    currUnit === "Celsius"
      ? `${Math.round(tempInCelsius)}°C`
      : `${Math.round((tempInCelsius * 9) / 5 + 32)}°F`;

  console.log(currentWeather);
  function getMaxValueKey(obj) {
    return Object.keys(obj).reduce(function (a, b) {
      return obj[a] > obj[b] ? a : b;
    });
  }
  const mainPollutant = `Main Pollutant : ${getMaxValueKey(
    airQuality.list[0].components
  )}`;
  console.log("airQuality>>", airQuality);
  const widPerc = `${(airQuality.list[0].main.aqi / 5) * 100}%`;
  console.log("widPerc >>>", widPerc);
  const wid = `${(airQuality.list[0].main.aqi / 5) * 100}`;
  return (
    <div className=" my-2  px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <Card
          title="Weather"
          subtitle="What's the weather."
          loc={
            currentWeather.city === null
              ? `${currentWeather.name}, ${currentWeather.sys.country}`
              : currentWeather.city
          }
          main={temp}
          type="weather"
        >
          <MiniCard
            bg="#19283f"
            label="Pressure"
            lvalue={`${currentWeather.main.pressure}mb`}
            color="#fff"
          />
          <MiniCard
            bg="#cce16a"
            label="Visibility"
            lvalue={`${(currentWeather.visibility / 1000).toFixed(1)} km`}
            color="#000"
          />
          <MiniCard
            bg="#fff"
            label="Humidity"
            lvalue={`${currentWeather.main.humidity}%`}
            color="#000"
          />
        </Card>
        <Card
          title="Air Quality"
          subtitle={mainPollutant}
          loc={
            currentWeather.city === null
              ? `${currentWeather.name}, ${currentWeather.sys.country}`
              : currentWeather.city
          }
          main={wid}
          type="air"
        >
          <HorizontalProgress width={widPerc} />
        </Card>
      </div>
    </div>
  );
};

export default WeatherDisplay;
