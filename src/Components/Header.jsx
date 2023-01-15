import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const navigation = [
	{ name: "Home", href: `/`, isActive: true },
	{ name: "About Us", href: `/AboutUs`, isActive: false },
	{ name: "Services", href: `/Services`, isActive: false },
	{ name: "Pricing", href: `/Pricing`, isActive: false },
	{ name: "Contact", href: `/Contact`, isActive: false },
];
const Header = () => {
	const history = useNavigate();
	var temp = 1;
	const [navBar, setNavBar] = useState(navigation);
	return (
		<Navbar className="" fluid={true} rounded={true}>
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
				{/* <Navbar.Link onClick={() => history(`/`)} className="text-base">
					Home
				</Navbar.Link>
				<Navbar.Link
					onClick={() => history(`/AboutUs`)}
					className="text-base"
					style={{ color: "#fac305" }}
				>
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
				</Navbar.Link> */}
				{navBar.map((items) => {
					<Navbar.Link key={items.name} href={items.href}>
						Pricing
					</Navbar.Link>;
				})}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
