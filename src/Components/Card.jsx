import React from "react";
import partlyCloudy from "../assets/partly_Cloudy.png";
import logo from "../assets/icon.png";
import { WeatherState } from "../WeatherContext";
import MiniCard from "./MiniCard";
import locIcon from "../assets/loc.png";
const Card = ({
  children,
  title,
  subtitle,
  loc,
  main,
  type,
  image = "null",
}) => {
  const { currentWeather } = WeatherState();

  const getWindDirectionFrom = (deg) => {
    if (deg >= 0 && deg < 22.5) return "Wind from North";
    if (deg >= 22.5 && deg < 67.5) return "Wind from North-East";
    if (deg >= 67.5 && deg < 112.5) return "Wind from East";
    if (deg >= 112.5 && deg < 157.5) return "Wind from South-East";
    if (deg >= 157.5 && deg < 202.5) return "Wind from South";
    if (deg >= 202.5 && deg < 247.5) return "Wind from South-West";
    if (deg >= 247.5 && deg < 292.5) return "Wind from West";
    if (deg >= 292.5 && deg < 337.5) return "Wind from North-West";
    return "Wind from North"; // Default to North if out of range
  };
  return (
    <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article
        className="shadow-lg bg-[#ffc100] bg-opacity-10 backdrop-blur-[16px] backdrop-saturate-[180%] bg-no-repeat bg-cover bg-center  overflow-hidden rounded-2xl shadow-2xl h-full"
        // style={{
        //   background: "linear-gradient(135deg, #ffc100, #ff9100)",
        // }}
      >
        <header className="flex items-center justify-start leading-tight p-2 md:p-4">
          <img
            alt="Placeholder"
            className="mr-2 block rounded-full"
            src={logo}
            height="32px"
            width="32px"
            style={{
              border: "1px solid black",
            }}
          />
          <div className="flex flex-col justify-between items-start">
            <h1
              className="no-underline hover:underline text-black font-medium text-xl cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              {title}
            </h1>
            <h2 className="mt-0.5 text-black font-medium text-xs">
              {subtitle}
            </h2>
          </div>
          <div className="flex ml-auto items-center">
            <p className="text-grey-darker text-sm font-bold mr-1">{loc}</p>
            <img src={locIcon} height="27px" width="27px" />
          </div>
        </header>
        <main className="flex items-start flex-col justify-between p-2 ml-2 md:p-3">
          <div className="flex content-between items-center">
            <h1
              className="no-underline hover:underline text-black text-3xl font-extrabold"
              href="#"
              style={{ textDecoration: "none" }}
            >
              {main}
            </h1>
            {type === "air" && (
              <span className="bg-red-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300 mx-4">
                AQI
              </span>
            )}
            {type === "weather" && (
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                style={{ height: "55px" }}
                alt={currentWeather.weather[0].description}
              />
            )}
          </div>
          {type === "air" && (
            <h1 className="pt-1 text-lg font-medium capitalize">
              {getWindDirectionFrom(currentWeather.wind.deg)}
            </h1>
          )}
          {type === "weather" && (
            <h1 className="pt-1 text-lg font-medium capitalize">
              {currentWeather.weather[0].description}
            </h1>
          )}
        </main>
        <footer className="flex items-center justify-between leading-none pb-4 lg:pb-0 md:px-2 lg:px-0">
          {children}
        </footer>
      </article>
    </div>
  );
};

export default Card;
