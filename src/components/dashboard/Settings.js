import React from "react";
import "../../styles/settings.css";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings-wrapper">
      <h2>Settings</h2>
      <NavLink to="/dashboard/settings">Profile</NavLink>
      <NavLink to="notification">Notification</NavLink>
      <NavLink to="security">Security</NavLink>
      <>
        <Outlet />
      </>
    </div>
  );
};

export default Settings;
