import React from "react";
import logo from "../../assets/Loan logo 1.png";
// import mail from "../../assets/mail-icon.svg";
// import bell from "../../assets/bell-icon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from "../../assets/profile-pic.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useSidebarStore from "../../store/menuTogleStore.js";

import useProfileImageStore from "../../store/profileImageStore";

// styles
import "../../styles/dashBoard.css";
import "../../styles/mediaQueries.css";

const DbNav = () => {
  const storedAdminData = localStorage.getItem("adminData");
  const parsedAdminData = JSON.parse(storedAdminData);
  const { profileImageUrl, setProfileImageUrl } = useProfileImageStore();
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <>
      <div className="db-nav-container">
        <div className="db-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="db-logo" />
          </Link>
        </div>
        <div className="db-hamburger-menu">
          <RxHamburgerMenu onClick={toggleSidebar} />
        </div>

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
