import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { TfiPieChart } from "react-icons/tfi";
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
            Loan Applications
          </NavLink>
          <NavLink to="history" className="db-link">
            History
          </NavLink>
          <NavLink to="admin" className="db-link">
            Admin
          </NavLink>
          <NavLink to="settings" className="db-link">
            Settings
          </NavLink>
          <NavLink to="help" className="db-link">
            Help & Support
          </NavLink>
        </nav>
        <div>
          <NavLink to="logout">logout</NavLink>
        </div>

      </aside>
      <Outlet />
    </>
  );
};

export default DashBoardContainer;
