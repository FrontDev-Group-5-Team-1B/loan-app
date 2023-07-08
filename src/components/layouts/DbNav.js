import React, { useState, useEffect } from "react";
import logo from "../../assets/Loan logo 1.png";
// import mail from "../../assets/mail-icon.svg";
// import bell from "../../assets/bell-icon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import profile from "../../assets/profile-pic.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useSidebarStore from "../../store/menuTogleStore.js";
import { motion } from "framer-motion";

import useProfileImageStore from "../../store/profileImageStore";

// styles
import "../../styles/dashBoard.css";
import "../../styles/mediaQueries.css";

const DbNav = ({ sidebarVisible, setSidebarVisible }) => {
  const storedAdminData = localStorage.getItem("adminData");
  const parsedAdminData = JSON.parse(storedAdminData);
  const { profileImageUrl, setProfileImageUrl } = useProfileImageStore();
  const [switchHamburger, setSwitchHamburger] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setSwitchHamburger(!switchHamburger);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setSwitchHamburger(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <div className="db-nav-container">
        <div className="db-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="db-logo" />
          </Link>
        </div>
        {switchHamburger ? (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 180 }}
            transition={{ duration: 0.5 }}
            onClick={toggleSidebar}
            className="db-hamburger-menu"
          >
            <AiOutlineClose />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 180 }}
            transition={{ duration: 0.5 }}
            onClick={toggleSidebar}
            className="db-hamburger-menu"
          >
            <GiHamburgerMenu />
          </motion.div>
        )}

        <div className="db-search">
          <input type="text" placeholder="Search" className="db-input-search" />
        </div>
        <div className="db-nav-icons">
          {/* <img src={mail} className="db-mail" /> */}
          {/* <img src={bell} className="db-bell" /> */}
          {parsedAdminData ? (
            <div className="welcome">
              <div>
                <h2 className="welcome-msg">
                  Welcome {parsedAdminData.firstName}
                </h2>
              </div>
              <Link to="dashboard/settings">
                {profileImageUrl ? (
                  <img src={profileImageUrl} className="profile-pic" />
                ) : (
                  <img src={profile} className="profile-pic" />
                )}
              </Link>
            </div>
          ) : (
            <Link to="settings">
              {profileImageUrl ? (
                <img src={profileImageUrl} className="profile-pic" />
              ) : (
                <img src={profile} className="profile-pic" />
              )}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default DbNav;
