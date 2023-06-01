import React, { useState } from "react";
import "../../styles/settings.css";
import { NavLink, Outlet } from "react-router-dom";
import Buttons from "../layouts/Buttons";

const Settings = () => {
  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="settings-wrapper">
      <h2 className="settings-heading">Settings</h2>
      <div className="settings-links">
        <NavLink
          to="/dashboard/settings"
          onClick={() => handlePageClick(1)}
          className={activePage === 1 ? "active-link" : ""}
        >
          Profile
        </NavLink>
        <NavLink
          to="notification"
          className={activePage === 2 ? "active-link" : ""}
          onClick={() => handlePageClick(2)}
        >
          Notification
        </NavLink>
        <NavLink
          to="security"
          className={activePage === 3 ? "active-link" : ""}
          onClick={() => handlePageClick(3)}
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
