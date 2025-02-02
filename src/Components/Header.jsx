import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
let navigation = [
  { key: 1, name: "Home", href: `/`, isActive: true },
  { key: 2, name: "About Us", href: `/AboutUs`, isActive: false },
  { key: 3, name: "Services", href: `/Services`, isActive: false },
  { key: 4, name: "Pricing", href: `/Pricing`, isActive: false },
  { key: 5, name: "Contact", href: `/Contact`, isActive: false },
];
const Header = () => {
  const history = useNavigate();
  const [navBar, setNavBar] = useState(navigation);

  const changeActiveStatus = (key, href) => {
    navBar.forEach((items) => (items.isActive = false));
    navBar[key - 1].isActive = true;
    setNavBar(navBar);
    return history(href);
  };

  return (
    <Navbar className="mx-4 md:mx-6 lg:mx-8" fluid={true} rounded={true}>
      <Navbar.Brand onClick={() => history(`/`)}>
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Weather App Logo" />
        <span
          className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white tracking-wide"
          style={{ fontFamily: "'Berkshire Swash', cursive" }}
        >
          Weatheria
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navBar.map((items) => (
          <Navbar.Link
            key={items.key}
            active={items.isActive}
            onClick={() => changeActiveStatus(items.key, items.href)}
            onMouseOver={(e) => {
              e.target.style.borderBottom = "2px solid #ffc100";
            }}
            onMouseOut={(e) => {
              e.target.style.borderBottom = items.isActive
                ? "2px solid #ffc100"
                : "none";
            }}
            style={{
              color: "#000",
              fontSize: "1rem",
              lineHeight: "1.5rem",
              padding: "5px 10px",
              borderBottom: items.isActive ? "2px solid #ffc100" : "none",
            }}
          >
            {items.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
