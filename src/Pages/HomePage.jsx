import React from "react";
import LocatForm from "../Components/LocatForm";
import home from "../assets/homecrop.png";

const HomePage = () => {
	return (
		<div className="container mx-auto flex justify-between items-center pt-8 px-10 h-full">
			<LocatForm />
			<img
				src={home}
				width="550px"
				height="100%"
				// className="border-2 border-solid border-red-800 p-0"
			/>
		</div>
	);
};

export default HomePage;
