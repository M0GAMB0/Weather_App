import React from "react";
import partlyCloudy from "../assets/partly_Cloudy.png";
import logo from "../assets/icon.png";
import MiniCard from "./MiniCard";
const Card = () => {
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
							Weather
						</h1>
						<h2 className="mt-0.5 text-lg text-black font-medium text-xs">
							What's the weather.
						</h2>
					</div>
					{/* <p className="text-grey-darker text-sm">11/1/19</p> */}
				</header>
				<main className="flex items-start flex-col justify-between p-2 ml-2 md:p-4">
					<h1
						className="no-underline hover:underline text-black text-4xl font-extrabold"
						href="#"
						style={{ textDecoration: "none" }}
					>
						23&#176;C
					</h1>
					<h1 className="pt-1 text-lg font-medium">Partly Cloudy</h1>
				</main>
				<footer className="flex items-center justify-center leading-none  md:px-2 lg:px-0">
					{/* <a
						className="flex items-center no-underline hover:underline text-black"
						href="#"
					>
						<p className="ml-2 text-sm">Saikumar</p>
					</a> */}
					<MiniCard bg="#19283f" label="Pressure" lvalue="800mb" color="#fff" />
					<MiniCard
						bg="#cce16a"
						label="Visibility"
						lvalue="4.3 km"
						color="#000"
					/>
					<MiniCard bg="#fff" label="Humidity" lvalue="87%" color="#000" />
				</footer>
			</article>
		</div>
	);
};

export default Card;
