import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import HomePage from "./Pages/HomePage";

const App = () => {
	return (
		<BrowserRouter>
			<div className="min-h-screen pt-8">
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} exact />
					<Route path="/AboutUs" element={<AboutUs />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
