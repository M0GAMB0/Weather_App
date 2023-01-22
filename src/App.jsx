import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";
import "./App.css";
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
		</BrowserRouter>
	);
};

export default App;
