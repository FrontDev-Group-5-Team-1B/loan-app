import React from "react";
import "../../styles/security.css";

const Security = () => {
  return (
    <div>
      <h4 className="profile-hp">Password Settings</h4>
      <p className="sec-text">
        Make sure a strong password is used, this is to ensure maximum security
        of your data
      </p>
      <div>
        <form className="sec-form">
          <div className="sec-inputs">
            <div>
              <input
                type="text"
                className="profile-input"
                placeholder="Old Password"
              />
            </div>
            <div>
              <input
                type="text"
                className="profile-input"
                placeholder="New Password"
              />
            </div>
            <div>
              <input
                type="text"
                className="profile-input"
                placeholder="Confirm New Password"
              />
            </div>
          </div>
        </form>

        <div>
          <button className="setings-pwd-btn">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default Security;
