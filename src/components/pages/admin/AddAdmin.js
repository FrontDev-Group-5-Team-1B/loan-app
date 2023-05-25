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
              
      </div>
    </>
  );
};

export default AddAdmin;
