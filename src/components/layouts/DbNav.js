import React from "react";
import logo from "../../assets/Loan logo 1.png";
import mail from "../../assets/mail-icon.svg";
import bell from "../../assets/bell-icon.svg";
import profile from "../../assets/profile-pic.png";
import { NavLink } from "react-router-dom";

// styles
import "../../styles/dashBoard.css";

const DbNav = () => {
  return (
    <>
      <div className="db-nav-container">
        <div className="db-logo header-img">
          <NavLink to="/"><img src={logo} /></NavLink>
        </div>
        <div className="db-search">
          <input type="text" placeholder="Search" className="db-input-search" />
        </div>
        <div className="db-nav-icons">
          <img src={mail} className="db-mail" />
          <img src={bell} className="db-bell" />
          <NavLink to="settings"><img src={profile} className="profile-pic" /></NavLink>
        </div>
      </div>
    </>
  );
};

export default DbNav;
