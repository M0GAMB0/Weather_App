import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import WeatherDisplay from "./Pages/WeatherDisplay";
import { WeatherState } from "./WeatherContext";
import Error from "./Pages/Error";
const App = () => {
  const { currentWeather } = WeatherState();
  return (
    <BrowserRouter>
      <div className=" min-h-screen pt-8 sm:overflow-y-hidden overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/WeatherDisplay"
            element={currentWeather && <WeatherDisplay />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
