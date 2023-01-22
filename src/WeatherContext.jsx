import React, { createContext } from "react";

const Weather = createContext();
const WeatherContext = ({ children }) => {
	return <Weather.Provider>{children}</Weather.Provider>;
};

export default WeatherContext;
export const weatherState = () => {
	return useContext(Weather);
};
