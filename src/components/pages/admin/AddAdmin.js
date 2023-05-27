import React from "react";
import rightArrow from "../../../assets/right-arrow.svg";
import cloud from "../../../assets/cloud-computing.png";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";

const AddAdmin = () => {
  const handleUpload = function (e) {
    e.preventDefault();
    console.log("hey");
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <div className="add-admin-container">
        <div class="indicator">
          <Link to="/dashboard/admin" className="add-admin-link">
            <p>Admin Dashboard</p>
          </Link>

          <GrNext />

          <p className="dash-bold">Add Admin</p>
        </div>
        <h2 className="admin-heading-primary">Add Admin</h2>
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2 className="h-sec">Admin Information</h2>

          <div className="admin-inputs">
            <label htmlFor="firstName">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="admin-input"
              />
            </label>

            <label htmlFor="email" className="admin-label">
              <input
                id="admin-email"
                name="admin-email"
                type="email"
                placeholder="Email Address"
                className="admin-input"
              />
            </label>
            <label htmlFor="lasttName">
              <input
                id="lasttName"
                name="lasttName"
                type="text"
                placeholder="Last Name"
                className="admin-input"
              />
            </label>
            <label htmlFor="lasttName">
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone Number"
                className="admin-input"
              />
            </label>
            <label htmlFor="position">
              <input
                id="position"
                name="position"
                type="text"
                placeholder="Position in Company"
                className="admin-input"
              />
            </label>
          </div>

          <div className="form-img-sec">
            <h2 className="h-s upload-h-s">Add image</h2>
            <div className="img-upload">
              <div className="form-img">
                <img src={cloud} />
              </div>
              <div className="form-img-text">
                <p>Upload an image to use as profile picture</p>
                <p className="text-italic">
                  Compatible file type: .jpg, .png, .svg, .bmp or .dxf
                </p>
              </div>

              <button className="_btn-blue upload-btn" onClick={handleUpload}>
                Uplad Image
              </button>
            </div>
          </div>
          <button className="_btn-blue save-upload-btn">Save</button>
        </form>
      </div>
    </>
  );
};

export default AddAdmin;
