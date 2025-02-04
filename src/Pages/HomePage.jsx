import React, { useEffect } from "react";
import LocatForm from "../Components/LocatForm";
import home from "../assets/homecrop.png";
import { WeatherState } from "../WeatherContext";
import { useNavigate } from "react-router-dom";

const HomePage = ({ onSearchChange }) => {
  let history = useNavigate();
  const { currentWeather, airQuality } = WeatherState();
  console.log("currentWeather >>", currentWeather);

  return (
    <div
      className=" flex justify-around items-center pt-8 px-6 md:px-10 h-full flex-col  sm:flex-row "
      // style={{ border: "2px solid red" }}
    >
      <LocatForm />
      <img
        src={home}
        // width="550px"
        height="100%"
        className="md:w-7/12 lg:w-5/12 sm:w-6/12"
        // className="border-2 border-solid border-red-800 p-0"
      />
    </div>
  );
};

export default HomePage;
