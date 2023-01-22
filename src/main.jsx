import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import WeatherContext from "./WeatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<WeatherContext>
			<App />
		</WeatherContext>
	</React.StrictMode>
);
