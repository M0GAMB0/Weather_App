import React from "react";
import partlyCloudy from "../assets/partly_Cloudy.png";
import logo from "../assets/icon.png";
import { WeatherState } from "../WeatherContext";
import MiniCard from "./MiniCard";
import locIcon from "../assets/loc.png";
const Card = ({ children, title, subtitle, loc, main }) => {
	const { currentWeather } = WeatherState();

	return (
		<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
			<article
				className="bg-no-repeat bg-cover bg-center  overflow-hidden rounded-2xl shadow-2xl"
				style={{
					backgroundImage: `url(${partlyCloudy})`,
				}}
			>
				<header className="flex items-center justify-start leading-tight p-2 md:p-4">
					<img
						alt="Placeholder"
						className="mr-2 block rounded-full"
						src={logo}
						height="32px"
						width="32px"
						style={{ border: "1px solid black" }}
					/>
					<div className="flex flex-col justify-between items-start">
						<h1
							className="no-underline hover:underline text-black font-medium text-xl cursor-pointer"
							style={{ textDecoration: "none" }}
						>
							{title}
						</h1>
						<h2 className="mt-0.5 text-lg text-black font-medium text-xs">
							{subtitle}
						</h2>
					</div>
					<div className="flex ml-auto items-center">
						<p className="text-grey-darker text-sm font-bold mr-1">{loc}</p>
						<img src={locIcon} height="27px" width="27px" />
					</div>
				</header>
				<main className="flex items-start flex-col justify-between p-2 ml-2 md:p-4">
					<h1
						className="no-underline hover:underline text-black text-6xl font-extrabold"
						href="#"
						style={{ textDecoration: "none" }}
					>
						{main}
					</h1>
					<h1 className="pt-1 text-lg font-medium capitalize">
						{currentWeather.weather[0].description}
					</h1>
				</main>
				<footer className="flex items-center justify-between leading-none pb-4 lg:pb-0 md:px-2 lg:px-0">
					{children}
				</footer>
			</article>
		</div>
	);
};

export default Card;
