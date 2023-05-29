import React from "react";
import "../../styles/settings.css";
import { NavLink, Outlet } from "react-router-dom";
import Buttons from "../layouts/Buttons";

const Settings = () => {
  const activeLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? " #666666" : "#b3b3b3",
      borderBottom: isActive ? "2px solid #666666" : "none",
    };
  };
  return (
    <div className="settings-wrapper">
      <h2 className="settings-heading">Settings</h2>
      <div className="settings-links">
        <NavLink
          to="/dashboard/settings"
          className="settings-link"
          style={activeLinkStyle}
        >
          Profile
        </NavLink>
        <NavLink
          to="notification"
          className="settings-link"
          style={activeLinkStyle}
        >
          Notification
        </NavLink>
        <NavLink
          to="security"
          className="settings-link"
          style={activeLinkStyle}
        >
          Security
        </NavLink>
      </div>
      <>
        <Outlet />
      </>
     
    </div>
  );
};

export default Settings;
