import React from "react";
import logo from "../../assets/Loan logo 1.png";
// import mail from "../../assets/mail-icon.svg";
// import bell from "../../assets/bell-icon.svg";
import profile from "../../assets/profile-pic.png";
import { Link } from "react-router-dom";

import useProfileImageStore from "../../store/profileImageStore";

// styles
import "../../styles/dashBoard.css";

const DbNav = () => {
  const storedAdminData = localStorage.getItem("adminData");
  const parsedAdminData = JSON.parse(storedAdminData);
  const { profileImageUrl, setProfileImageUrl } = useProfileImageStore();

  return (
    <>
      <div className="db-nav-container">
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
              <Link to="settings">
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
