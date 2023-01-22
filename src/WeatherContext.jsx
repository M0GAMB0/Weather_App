import React, { createContext, useContext, useState } from "react";

const Weather = createContext();
const WeatherContext = ({ children }) => {
	const [city, setCity] = useState(null);
	return (
		<Weather.Provider value={{ city, setCity }}>{children}</Weather.Provider>
	);
};

export default WeatherContext;
export const WeatherState = () => {
	return useContext(Weather);
};
