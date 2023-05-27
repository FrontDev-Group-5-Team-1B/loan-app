import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Loan logo 1.png";
import { FaBars, FaTimes } from "react-icons/fa";

// styles
import "../../styles/header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState();
  return (
    <>
      <nav className="header">
        <div className="header-img">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className={isMobile ? "navbar-mobile": "navbar"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About Us</NavLink>
          <a href="/#services">Services</a>
          <NavLink to="contact">Contact</NavLink>
        </ul>
        <div className="btn">
          <NavLink to="login">Log In</NavLink>
          <NavLink to="signup" className="signup">
            Sign Up
          </NavLink>
        </div>
        <button className="mobile-menu-icons">
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
