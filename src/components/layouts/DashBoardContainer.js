import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { RiDashboardFill, RiAdminLine, RiHistoryFill } from "react-icons/ri";
import { TfiPieChart } from "react-icons/tfi";
import { TbCoins, TbLogout } from "react-icons/tb";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import DbNav from "./DbNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../Modal";
import { useQueryClient } from "react-query";

const DashBoardContainer = ({ setAuth, auth }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeLink, setActiveLink] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleLinkClick = (pageId) => {
    setActiveLink(pageId);
  };

  const notify = () => toast("Successful");

  useEffect(() => {
    console.log("hello");
    notify();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(!auth);
    queryClient.removeQueries();
    navigate("/");
    setShowModal(false);
  };
  return (
    <main className="db-main">
      <aside className="db-s-nav">
        <div className="toast">
          <ToastContainer style={{ zIndex: "999999" }} />
        </div>
        {/* <DbNav /> */}
        <nav className="db-links">
          <NavLink
            to="/dashboard"
            onClick={() => handleLinkClick(1)}
            className={activeLink === 1 ? "active-dbl" : " db-link"}
          >
            <RiDashboardFill /> Dashboard
          </NavLink>
          <NavLink
            to="borrower_data"
            onClick={() => handleLinkClick(2)}
            className={activeLink === 2 ? "active-dbl" : " db-link"}
          >
            <TfiPieChart /> Borrower's Data
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
          <NavLink className="db-link" onClick={() => setShowModal(true)}>
            <TbLogout />
            LogOut
          </NavLink>
        </div>
        {showModal && (
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className="profile-modal-content">
              <p>Are you sure you want to Logout?</p>
              <div className="yes_no">
                <p className="yes" onClick={handleLogout}>
                  Yes
                </p>
                <p className="no" onClick={() => setShowModal(false)}>
                  No
                </p>
              </div>
            </div>
          </Modal>
        )}
      </aside>

      <Outlet />
    </main>
  );
};

export default DashBoardContainer;
