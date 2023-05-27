import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { TfiPieChart } from "react-icons/tfi";
import { MdHistory, MdHelpOutline } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiAdminFill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { BsDatabase } from "react-icons/bs"
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
          <NavLink to="loan" className="db-link">
            <BsDatabase/> Loan Applications
          </NavLink>
          <NavLink to="history" className="db-link">
            <MdHistory/> History
          </NavLink>
          <NavLink to="admin" className="db-link">
            <RiAdminFill/> Admin
          </NavLink>
          <NavLink to="settings" className="db-link">
            <FiSettings/> Settings
          </NavLink>
          <NavLink to="help" className="db-link">
            <MdHelpOutline/> Help & Support
          </NavLink>
        </nav>
        <div><NavLink to="logout" className="db-link"><HiOutlineLogout/> logout</NavLink></div>
      </aside>
      <Outlet />
    </>
  );
};

export default DashBoardContainer;
