import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { RiDashboardFill, RiAdminLine, RiHistoryFill } from "react-icons/ri";
import { TfiPieChart } from "react-icons/tfi";
import { TbCoins, TbLogout } from "react-icons/tb";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import DbNav from "./DbNav";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

import Modal from "../Modal";
import { useQueryClient } from "react-query";
import "../../styles/mediaQueries.css";
import useSidebarStore from "../../store/menuTogleStore.js";

const DashBoardContainer = ({ setAuth, auth }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [activeLink, setActiveLink] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const handleLinkClick = (pageId) => {
    setActiveLink(pageId);
    if (window.innerWidth <= 600) {
      useSidebarStore.setState({ sidebarVisible: false });
    }
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        useSidebarStore.setState({ sidebarVisible: false });
      } else {
        useSidebarStore.setState({ sidebarVisible: true });
      }
    };

    handleResize(); // Call it initially to set the correct initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sidebarVisible = useSidebarStore((state) => state.sidebarVisible);

  return (
    <>
      <DbNav />
      <main className="db-main">
        <AnimatePresence>
          {sidebarVisible && (
            <motion.aside
              className="db-s-nav"
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ duration: 0.3 }}
            >
              <div className="toast">
                {/* <ToastContainer style={{ zIndex: "999999" }} /> */}
              </div>

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
                  Logout
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
            </motion.aside>
          )}
        </AnimatePresence>
        <Outlet />
      </main>
    </>
  );
};

export default DashBoardContainer;
