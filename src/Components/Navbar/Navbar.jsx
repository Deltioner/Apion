import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu_icon.png";

const Navbar = () => {
  const handleJoinClick = () => {
    window.open("/LogSign", "_blank", "noopener,noreferrer");
  };

  const [dis, setdis] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setdis(true) : setdis(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const ToggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${dis ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="aboutus" smooth={true} offset={-260} duration={500}>
            About us{" "}
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-260} duration={500}>
            Services{" "}
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-300} duration={500}>
            Projects{" "}
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} offset={-260} duration={500}>
            Contacts{" "}
          </Link>
        </li>
        <li>
          <button className="btn" onClick={handleJoinClick}>
            Join
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={ToggleMenu} />
    </nav>
  );
};

export default Navbar;
