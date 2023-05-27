import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiDashboardFill, RiAdminLine, RiHistoryFill } from "react-icons/ri";
import { TfiPieChart } from "react-icons/tfi";
import { TbCoins, TbLogout } from "react-icons/tb";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import DbNav from "./DbNav";

const DashBoardContainer = () => {
  return (
    <>
      <aside className="db-s-nav">
        <DbNav />
        <nav className="db-links">
          <NavLink to="/dashboard" className="db-link">
            <RiDashboardFill /> Dashboard
          </NavLink>
          <NavLink to="borrow" className="db-link">
            <TfiPieChart /> Borrow Data
          </NavLink>
          <NavLink to="loan_application" className="db-link">
            <TbCoins /> Loan Applications
          </NavLink>
          <NavLink to="history" className="db-link">
            <RiHistoryFill /> History
          </NavLink>
          <NavLink to="admin" className="db-link">
            <RiAdminLine /> Admin
          </NavLink>
          <NavLink to="settings" className="db-link">
            <FiSettings /> Settings
          </NavLink>
          <NavLink to="help" className="db-link">

      </aside>
      <Outlet />
    </>
  );
};

export default DashBoardContainer;
