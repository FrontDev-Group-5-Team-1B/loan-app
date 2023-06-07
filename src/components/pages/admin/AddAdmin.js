import React, { useState, useEffect } from "react";
import cloud from "../../../assets/cloud-computing.png";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import Axios from "axios";
import Modal from "../../Modal";

const AddAdmin = () => {
  const [image, setImage] = useState();
  const [adminInfoModal, setAdminInfoModal] = useState(false);
  useEffect(() => {
    if (adminInfoModal) {
      const timer = setTimeout(() => {
        setAdminInfoModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [adminInfoModal]);
  const handleUpload = function (e) {
    e.preventDefault();
    console.log("hey");
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("hello");
  };

  const presetKey = "jiut047v";
  const cloudName = "dd8sai0uo";

  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetKey);
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => setImage(res.data.secure_url))
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-admin-container dash-wrapper">
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
            {image ? (
              <img src={image} />
            ) : (
              <div className="add-admin-form-img-wraper">
                <div className="form-img">
                  <img src={cloud} />
                </div>
                <div className="form-img-text">
                  <p>Upload an image to use as profile picture</p>
                  <p className="text-italic">
                    Compatible file type: .jpg, .png, .svg, .bmp or .dxf
                  </p>
                </div>
              </div>
            )}

            <label className="_btn-blue upload-btn">
              <input type="file" onChange={handleFile} />
              {image ? "Image Uploaded" : "Upload Image"}
            </label>
          </div>
        </div>
        <button
          className="_btn-blue save-upload-btn"
          onClick={() => setAdminInfoModal(true)}
        >
          Save
        </button>
        {adminInfoModal && (
          <Modal show={adminInfoModal} onClose={() => setAdminInfoModal(false)}>
            <div className="profile-modal2-content">
              <p>Your data has already been saved</p>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};

export default AddAdmin;
