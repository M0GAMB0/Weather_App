import React, { createContext, useContext, useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Config/api";

const Weather = createContext();
const WeatherContext = ({ children }) => {
	const [city, setCity] = useState(null);
	const change = (city) => {
		setCity(city);
		const [lat, lon] = city.value.split(" ");
		const currentWeatherFetch = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
	};
	return (
		<Weather.Provider value={{ city, change }}>{children}</Weather.Provider>
	);
};

export default WeatherContext;
export const WeatherState = () => {
	return useContext(Weather);
};
