import React, { createContext, useContext, useEffect, useState } from "react";
import { WEATHER_API_URL } from "./Config/api";

const Weather = createContext();
const WeatherContext = ({ children }) => {
	const [city, setCity] = useState(null);
	const [lat, setLat] = useState(null);
	const [long, setLong] = useState(null);
	const change = (city) => {
		setCity(city);
		const [lati, lon] = city.value.split(" ");
		setLat(lati);
		setLong(lon);
		const currentWeatherFetch = `${WEATHER_API_URL}/weather?lat={lat}&lon={lon}&appid={API key}`;
	};
	return (
		<Weather.Provider value={{ city, lat, long, change }}>
			{children}
		</Weather.Provider>
	);
};

export default WeatherContext;
export const WeatherState = () => {
	return useContext(Weather);
};
