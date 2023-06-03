import React from "react";
import { Link } from "react-router-dom";

import "./admin.css";
import "./adminQueries.css";
import adminData from "../../../adminData";

import messageIcon from "../../../assets/message-icon.svg";
console.log(adminData);

const AdminPage = () => {
  const adminInfo = adminData.map((admin) => {
    console.log(admin);
    return (
      <div className="admin-card" key={admin.id}>
        <div className="admin-card-info">
          <div className="admin-img">
            <img src={admin.picture} />
          </div>
          <div className="admin-info">
            <h3 className="admin-name">{admin.name}</h3>
            <p className="admin-role">{admin.role}</p>
            <p className="admin-status">
              <span className="active-admin">{admin.status}</span>{" "}
              <div className="admin-active"></div>
            </p>
          </div>
        </div>
        <button className="admin-message-btn">
          <span className="admin-message-text">Send a Message</span>
          <img src={messageIcon} className="admin-message-icon" />
        </button>
      </div>
    );
  });

  const activityData = adminData.map((admin) => {
    return (
      <div className="admin-activities-data" key={admin.id}>
        <p>{admin.name}</p>
        <p>{admin.role}</p>
        <p>Rejected a Loan Application</p>
        <img src={admin.teamImg} />
      </div>
    );
  });
  return (
    <div className="admin-container dash-wrapper">
      <div className="admin-heading">
        <h2 className="admin-heading-primary">Admin Dashboard</h2>
        <h3 className="admin-numbers">
          Number of Admins <span>(6)</span>
        </h3>
      </div>
      <button className="add-admin-btn">
        <Link
          to="/dashboard/add_admin"
          style={{ textDecoration: "none", color: "white" }}
        >
          <span className="admin-plus">+</span> Add Admin
        </Link>
      </button>

      <div className="admin-card-holder">{adminInfo}</div>

      <div className="admin-activities-container">
        <h3 className="admin-activities-headig">Admin Activities</h3>
        <div className="admin-activities-holder">
          <header className="admin-activities-header">
            <h4 className="">Admin Name</h4>
            <h4 className="">Role</h4>
            <h4 className="">Last Activity</h4>
            <h4 className="">Team</h4>
          </header>
          {activityData}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
