import { Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const history = useNavigate();
	return (
		<Navbar className="container mx-auto" fluid={true} rounded={true}>
			<Navbar.Brand href="#">
				<img
					src="https://cdn4.iconfinder.com/data/icons/weather-yellow/60/001_-_Sunny_Cloudy-512.png"
					className="mr-3 h-6 sm:h-9"
					alt="Weather App Logo"
				/>
				<span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
					Weather App
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link
					onClick={() => history(`/`)}
					className="text-base"
					active={true}
				>
					Home
				</Navbar.Link>
				<Navbar.Link onClick={() => history(`/AboutUs`)} className="text-base">
					About
				</Navbar.Link>
				<Navbar.Link href="#" className="text-base">
					Services
				</Navbar.Link>
				<Navbar.Link href="#" className="text-base">
					Pricing
				</Navbar.Link>
				<Navbar.Link href="#" className="text-base">
					Contact
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
