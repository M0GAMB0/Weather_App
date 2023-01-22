import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import "./App.css";
import { ToastContainer } from "react-toastify";
const App = () => {
	const handleOnSearchChange = (searchData) => {
		console.log(searchData);
	};
	return (
		<BrowserRouter>
			<div className="container mx-auto min-h-screen pt-8">
				<Header />
				<Routes>
					<Route
						path="/"
						element={<HomePage onSearchChange={handleOnSearchChange} />}
						exact
					/>
					<Route path="/AboutUs" element={<AboutUs />} />
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
