import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiDashboardFill, RiAdminLine, RiHistoryFill } from "react-icons/ri";
import { TfiPieChart } from "react-icons/tfi";
import { TbCoins, TbLogout } from "react-icons/tb";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import DbNav from "./DbNav";

const DashBoardContainer = () => {
  const [activeLink, setActiveLink] = useState(1);
  const handleLinkClick = (pageId) => {
    setActiveLink(pageId);
  };
  return (
    <>
      <aside className="db-s-nav">
        <DbNav />
        <nav className="db-links">
          <NavLink
            to="/dashboard"
            onClick={() => handleLinkClick(1)}
            className={activeLink === 1 ? "active-dbl" : " db-link"}
          >
            <RiDashboardFill /> Dashboard
          </NavLink>
          <NavLink
            to="borrow"
            onClick={() => handleLinkClick(2)}
            className={activeLink === 2 ? "active-dbl" : " db-link"}
          >
            <TfiPieChart /> Borrow Data
          </NavLink>
          <NavLink
            to="loan"
            onClick={() => handleLinkClick(3)}
            className={activeLink === 3 ? "active-dbl" : " db-link"}
          >
            <TbCoins /> Loan Applications
          </NavLink>
          <NavLink
            to="history"
            onClick={() => handleLinkClick(4)}
            className={activeLink === 4 ? "active-dbl" : " db-link"}
          >
            <RiHistoryFill /> History
          </NavLink>
          <NavLink
            to="admin"
            onClick={() => handleLinkClick(5)}
            className={activeLink === 5 ? "active-dbl" : " db-link"}
          >
            <RiAdminLine /> Admin
          </NavLink>
          <NavLink
            to="settings"
            onClick={() => handleLinkClick(6)}
            className={activeLink === 6 ? "active-dbl" : " db-link"}
          >
            <FiSettings /> Settings
          </NavLink>
          <NavLink
            to="help"
            onClick={() => handleLinkClick(7)}
            className={activeLink === 7 ? "active-dbl" : " db-link"}
          >
            <FiHelpCircle />
            Help & Support
          </NavLink>
        </nav>

        <div>
          <NavLink to="/" className="db-link">
            <TbLogout />
            LogOut
          </NavLink>
        </div>
      </aside>

      <Outlet />
    </>
  );
};

export default DashBoardContainer;
