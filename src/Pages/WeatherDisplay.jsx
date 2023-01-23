import React from "react";
import Card from "../Components/Card";

const WeatherDisplay = () => {
	return (
		<div className="container my-2 mx-auto px-4 md:px-12">
			<div className="flex flex-wrap -mx-1 lg:-mx-4">
				<Card />
				{/* <Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card /> */}
			</div>
		</div>
	);
};

export default WeatherDisplay;
