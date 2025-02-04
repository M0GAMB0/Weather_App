import React, { createContext, useContext, useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Config/api";

const Weather = createContext();
const WeatherContext = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(
    typeof JSON.parse(localStorage.getItem("currentWeather")) === "object"
      ? JSON.parse(localStorage.getItem("currentWeather"))
      : null
  );
  const [foreCast, setForeCast] = useState(
    typeof JSON.parse(localStorage.getItem("foreCast")) === "object"
      ? JSON.parse(localStorage.getItem("foreCast"))
      : null
  );
  const [airQuality, setAirQuality] = useState(
    typeof JSON.parse(localStorage.getItem("airQuality")) === "object"
      ? JSON.parse(localStorage.getItem("airQuality"))
      : null
  );
  const [currUnit, setCurrUnit] = useState("Celsius");
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    localStorage.setItem("currentWeather", JSON.stringify(currentWeather));
    localStorage.setItem("airQuality", JSON.stringify(airQuality));
    localStorage.setItem("foreCast", JSON.stringify(foreCast));
  }, [airQuality]);
  const change = (city) => {
	setSearchData(city);
    const [lat, lon] = city.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const airQuality = fetch(
      `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    Promise.all([currentWeatherFetch, foreCastFetch, airQuality])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const airQualityResponse = await response[2].json();
        setCurrentWeather({ city: city.label, ...weatherResponse });
        setForeCast({ city: city.label, ...forecastResponse });
        setAirQuality(airQualityResponse);
      })
      .catch((err) => console.log(err));
  };
  // Poll every 30 seconds
  useEffect(() => {
    if (searchData) {
      change(searchData); // Initial fetch

      const intervalId = setInterval(() => {
        change(searchData); // Fetch every 30 seconds
      }, 30000);

      // Clean up the interval on unmount
      return () => clearInterval(intervalId);
    }
  }, [searchData]); // Depend on city to refetch data when it changes

  console.log(currentWeather);
  console.log("foreCast >>>",foreCast);
  console.log(airQuality);
  return (
    <Weather.Provider
      value={{
        change,
        currentWeather,
        foreCast,
        airQuality,
        setCurrUnit,
        currUnit,
		setCurrentWeather
      }}
    >
      {children}
    </Weather.Provider>
  );
};

export default WeatherContext;
export const WeatherState = () => {
  return useContext(Weather);
};
