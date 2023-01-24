import React, { useState } from "react";
import { Label, Modal } from "flowbite-react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../Config/api";
import { toast } from "react-toastify";
import { WeatherState } from "../WeatherContext";
import { useNavigate } from "react-router-dom";
const ModalForm = ({ show, setShow }) => {
	const [search, setSearch] = useState(null);
	const { change } = WeatherState();
	const history = useNavigate();

	const handleOnChange = async (searchData) => {
		setSearch(searchData);
		await change(searchData);
		return history(`/WeatherDisplay`);
	};
	const HrLine = ({ color }) => (
		<hr
			style={{
				color: color,
				backgroundColor: color,
				height: 2,
				width: "100%",
			}}
		/>
	);
	const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(
				`${GEO_API_URL}/cities?namePrefix=${inputValue}`,
				geoApiOptions
			);
			const response_1 = await response.json();
			return {
				options: response_1.data.map((city) => {
					return {
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					};
				}),
			};
		} catch (err) {
			console.log("Error");
		}
	};
	const handleOnclick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(onSucces, onError);
		} else {
			alert("Your Browser doesnot support geolocation api");
		}
	};
	const onSucces = (position) => {
		const { latitude, longitude } = position.coords;
		change({
			value: `${latitude} ${longitude}`,
			label: null,
		});
		return history(`/WeatherDisplay`);
	};
	const onError = (err) => {
		toast.error("You denied permission to device location");
		console.log(err);
	};
	return (
		<Modal show={show} size="md" popup={true} onClose={() => setShow(false)}>
			<Modal.Header />
			<Modal.Body>
				<div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
					<h1 className="text-2xl font-medium text-gray-900 dark:text-white">
						Enter your City
					</h1>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="location" value="Please Enter Valid City Name" />
						</div>
						<AsyncPaginate
							placeholder="Search for a City"
							debounceTimeout={500}
							value={search}
							className="text-black"
							onChange={handleOnChange}
							loadOptions={loadOptions}
						/>
					</div>
					<div className="flex justify-between items-center">
						<HrLine color="#000" />
						<h1 className="text-center font-bold px-3">OR</h1>
						<HrLine color="#000" />
					</div>
					<button
						onClick={handleOnclick}
						className="text-xl text-center w-full"
					>
						Get Device Location
					</button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ModalForm;
