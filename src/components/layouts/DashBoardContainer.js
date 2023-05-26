import React from "react";
import { NavLink, Outlet } from "react-router-dom";
 import {RiDashboardFill} from 'react-icons/ri';
 import { TfiPieChart } from "react-icons/tfi";

const DashBoardContainer = () => {
  return (
    <>
      <aside>
        <nav>
         <NavLink to="/dashboard"><RiDashboardFill/> Dashboard</NavLink>
        <NavLink to="borrow"><TfiPieChart/> Borrow Data</NavLink>
        <NavLink to="loan_application">Loan Applications</NavLink>
        <NavLink to="history">History</NavLink>
        <NavLink to="admin">Admin</NavLink>
        <NavLink to="settings">Settings</NavLink>
        <NavLink to="help">Help & Support</NavLink>
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
