import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Loan logo 1.png";
import DbNav from "./DbNav";

// styles
import "../../styles/header.css";

const Header = ({auth}) => {
  const [isMobile, setIsMobile] = useState(false);



  return (
    <>
      <header className="header">
        <div className="header-img">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        {auth ? (
          <DbNav />
        ) : (
          <>
            <div className={`navbar ${isMobile ? "mobile" : ""}`}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About Us</NavLink>
              <a href="/#services">Services</a>
              <NavLink to="contact">Contact</NavLink>
            </div>
            <div className="btn">
              <NavLink to="login">Log In</NavLink>
              <NavLink to="signup" className="signup">
                Sign Up
              </NavLink>
            </div>
          </>
        )}
      </header>

      <Outlet />
    </>
  );
};

export default Header;
