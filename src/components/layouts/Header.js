import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Loan logo 1.png";
import DbNav from "./DbNav";
import { FaBars, FaTimes } from "react-icons/fa";

// styles
import "../../styles/header.css";


const Header = ({auth}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }
  return (
    <>
      <header className={auth || localStorage.getItem('token') ? "header header-dash" : "header"}>
        <div className="header-img">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        {auth || localStorage.getItem('token') ? (
          <DbNav />
        ) : (
          <>
            <div className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
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
            <button className="mobile-menu-icons" onClick={toggleMobileMenu}>
             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
           </button>
          </>
        )}
      </header>
      <nav className="header-second">
      <div className="btn-second">
          <NavLink to="login">Log In</NavLink>
          <NavLink to="signup" className="signup">
            Sign Up
          </NavLink>
        </div>
      </nav>


      <Outlet />
    </>
  );
};

export default Header;