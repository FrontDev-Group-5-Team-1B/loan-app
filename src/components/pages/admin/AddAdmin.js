import React from "react";
import rightArrow from "../../../assets/right-arrow.svg";

const AddAdmin = () => {
  return (
    <>
      <div className="add-admin-container">
        <div class="indicator">
          <p>Admin Dashboard</p>
          <img src={rightArrow} />
          <p>Add Admin</p>
        </div>
        <h2 className="admin-heading-primary">Add Admin</h2>
        <form className="admin-form">
          <h2>Admin Information</h2>

          <div>
            <label htmlFor="firstName">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="FirstName"
                className="input"
              />
            </label>

            <label htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="input"
              />
            </label>
            <label htmlFor="lasttName">
              <input
                id="lasttName"
                name="lasttName"
                type="text"
                placeholder="lasttName"
                className="input"
              />
            </label>
            <label htmlFor="lasttName">
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone Number"
                className="input"
              />
            </label>
            <label htmlFor="position">
              <input
                id="position"
                name="position"
                type="text"
                placeholder="Position in Company"
                className="input adnin-input"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAdmin;
