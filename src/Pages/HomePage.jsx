import React from "react";
import LocatForm from "../Components/LocatForm";
import home from "../assets/homecrop.png";

const HomePage = ({ onSearchChange }) => {
	return (
		<div
			className=" flex justify-around items-center pt-8 px-6 md:px-10 h-full flex-col  sm:flex-row "
			// style={{ border: "2px solid red" }}
		>
			<LocatForm />
			<img
				src={home}
				// width="550px"
				height="100%"
				className="md:w-7/12 lg:w-5/12 sm:w-6/12"
				// className="border-2 border-solid border-red-800 p-0"
			/>
		</div>
	);
};

export default HomePage;
