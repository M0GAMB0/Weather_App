import React, { useState } from "react";
import ModalForm from "./ModalForm";
import { WeatherState } from "../WeatherContext";

const LocatForm = () => {
	const [show, setShow] = useState(false);
	const { currentWeather, airQuality } = WeatherState();
	return (
		<div
			className="flex flex-col justify-between items-start w-full"
			// style={{ border: "2px solid red" }}
		>
			<span className="text-7xl md:text-8xl lg:text-9xl">Weather with us.</span>
			<h3 className="text-2xl mt-10">
				Get all the information regarding Weather from us.
			</h3>
			<button onClick={() => setShow(true)} className="text-xl px-10 mt-7">
				{currentWeather?'Change Location':'Get Started'}
			</button>
			<ModalForm show={show} setShow={setShow} />
		</div>
	);
};

export default LocatForm;
