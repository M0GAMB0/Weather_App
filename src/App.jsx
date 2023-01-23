import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import WeatherDisplay from "./Pages/WeatherDisplay";
const App = () => {
	return (
		<BrowserRouter>
			<div className=" min-h-screen pt-8">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} exact />
					<Route path="/AboutUs" element={<AboutUs />} />
					<Route path="/WeatherDisplay" element={<WeatherDisplay />} />
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
