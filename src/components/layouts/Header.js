import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Loan logo 1.png";

// styles
import "../../styles/header.css"

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header-img">
        <img src={logo} alt="logo"/>
      </div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About Us</NavLink>
        <a href="#services">Services</a>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <div className="btn">
        <NavLink to="login">Log In</NavLink>
        <NavLink to="signup" className="signup">Sign Up</NavLink>
      </div>
    </header>

    <Outlet/>
    </>

    
  );
};

export default Header;
