import { Navbar } from "flowbite-react";
import React from "react";

const Header = () => {
	return (
		<Navbar className="container mx-auto" fluid={true} rounded={true}>
			<Navbar.Brand href="https://flowbite.com/">
				<img
					src="https://flowbite.com/docs/images/logo.svg"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite
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
