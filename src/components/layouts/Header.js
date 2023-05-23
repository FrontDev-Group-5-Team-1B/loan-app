import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/Loan logo 1.png";

const Header = () => {
  return (
    <>
    <header>
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <div>
        <NavLink to="login">
          <button>Log In</button>
        </NavLink>
        <NavLink to="signup">
          <button>Sign Up</button>
        </NavLink>
      </div>
    </header>

    <Outlet/>
    </>

    
  );
};

export default Header;
