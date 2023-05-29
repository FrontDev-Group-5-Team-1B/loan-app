import React from "react";
import Buttons from "../layouts/Buttons";

const Notification = () => {
  return (
    <div>
      <h4 className="profile-hp">Notifications Settings</h4>
      <div>
        <ul className="notification-lists">
          <span className="notification-list">
            <li>Get notified when a message is sent</li>
            <span className="notifications-btn">
              <button className="yes">Yes</button>
              <button className="no">No</button>
            </span>
          </span>
          <span className="notification-list">
            <li>Get notified when a message is received</li>
            <span className="notifications-btn">
              <button className="yes">Yes</button>
              <button className="no">No</button>
            </span>
          </span>
          <span className="notification-list">
            <li>Get notified when a defaulter is detected</li>
            <span className="notifications-btn">
              <button className="yes">Yes</button>
              <button className="no">No</button>
            </span>
          </span>
          <span className="notification-list">
            <li>Get notified when a loan is generated</li>
            <span className="notifications-btn">
              <button className="yes">Yes</button>
              <button className="no">No</button>
            </span>
          </span>
        </ul>
      </div>
      <div className="cancle-save-btn">
        <button className="cancle">Cancle</button>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default Notification;
