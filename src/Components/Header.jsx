import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { WeatherState } from "../WeatherContext";

let navigation = [
  { key: 1, name: "Home", href: `/`, isActive: true },
  { key: 2, name: "About Us", href: `/AboutUs`, isActive: false },
  { key: 3, name: "Services", href: `/Services`, isActive: false },
  { key: 4, name: "Pricing", href: `/Pricing`, isActive: false },
  { key: 5, name: "Contact", href: `/Contact`, isActive: false },
  { key: 6, name: "Change Location", href: `/change-location`, isActive: false },
];

const Header = () => {
  const history = useNavigate();
  const [navBar, setNavBar] = useState(navigation);
  const [unit, setUnit] = useState("Celsius"); // To store the selected unit
  const { currentWeather, setCurrUnit } = WeatherState();
  console.log("vvvv >>>", currentWeather);
  const changeActiveStatus = (key, href) => {
    navBar.forEach((items) => (items.isActive = false));
    navBar[key - 1].isActive = true;
    setNavBar(navBar);
    return history(href);
  };

  const toggleUnit = () => {
    const newUnit = unit === "Celsius" ? "Fahrenheit" : "Celsius";
    setUnit(newUnit); // Update local state
    setCurrUnit(newUnit); // Update the global state in WeatherContext
  };

  return (
    <Navbar className="mx-4 md:mx-6 lg:mx-8" fluid={true} rounded={true}>
      <Navbar.Brand onClick={() => history(`/`)}>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Weather App Logo" />
        <span
          className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white tracking-wide"
          style={{ fontFamily: "'Berkshire Swash', cursive" }}
        >
          Weatheria
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navBar.map((items) => (
          ((currentWeather != null &&  items.key === 6) || items.key != 6) &&
          <Navbar.Link
            key={items.key}
            active={items.isActive}
            onClick={() => changeActiveStatus(items.key, items.href)}
            onMouseOver={(e) => {
              e.target.style.borderBottom = "2px solid #ffc100";
            }}
            onMouseOut={(e) => {
              e.target.style.borderBottom = items.isActive
                ? "2px solid #ffc100"
                : "none";
            }}
            style={{
              color: "#000",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              padding: "5px 10px",
              borderBottom: items.isActive ? "2px solid #ffc100" : "none",
            }}
          >
            {items.name}
          </Navbar.Link>
        ))}
        <div className="flex items-center ml-4">
          <span className="mr-2 text-sm text-gray-800 dark:text-white">°C</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={unit === "Fahrenheit"}
              onChange={toggleUnit}
            />
            <span className="slider round"></span>
          </label>
          <span className="ml-2 text-sm text-gray-800 dark:text-white">°F</span>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
