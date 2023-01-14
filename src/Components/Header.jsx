import { Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
	return (
		<Navbar className="container mx-auto" fluid={true} rounded={true}>
			<Navbar.Brand href="#">
				<img
					src="https://purepng.com/public/uploads/large/purepng.com-weather-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596694capb5.png"
					className="mr-3 h-6 sm:h-9"
					alt="Weather App Logo"
				/>
				<span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
					Weather App
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href="#" active={true}>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
