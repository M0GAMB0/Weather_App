import React, { createContext, useContext, useEffect, useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Config/api";

const Weather = createContext();
const WeatherContext = ({ children }) => {
	const [city, setCity] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [foreCast, setForeCast] = useState(null);

	const change = (city) => {
		setCity(city);
		const [lat, lon] = city.value.split(" ");
		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
		);
		const foreCastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
		);
		Promise.all([currentWeatherFetch, foreCastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();
				setCurrentWeather({ city: city.label, ...weatherResponse });
				setForeCast({ city: city.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	};
	console.log(currentWeather);
	console.log(foreCast);
	return (
		<Weather.Provider value={{ city, change }}>{children}</Weather.Provider>
	);
};

export default WeatherContext;
export const WeatherState = () => {
	return useContext(Weather);
};
