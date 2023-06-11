import React, { useState } from "react";
import "../../styles/security.css";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";

const Security = () => {
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  // const [error, setError] = useState("");
  const { mutate, error } = useMutation(
    (data) =>
      axios.put(
        `https://nodebt-application.onrender.com/api/admins/${localStorage.getItem(
          "adminId"
        )}/change-password`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
    {
      onError: (error) => {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        console.error("An error occurred:", errorMessage);
        throw new Error(errorMessage);
      },
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChangePassword((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (changePassword.newPassword !== changePassword.confirmNewPassword) {
    //   // Handle password mismatch error
    //   return;
    // }

    mutate(changePassword);
  };

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
                id="oldPassword"
                name="oldPassword"
                type="text"
                className="profile-input"
                placeholder="Old Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="newPassword"
                name="newPassword"
                type="text"
                className="profile-input"
                placeholder="New Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="text"
                className="profile-input"
                placeholder="Confirm New Password"
                onChange={handleChange}
              />
            </div>
            {error?.response?.data?.message && (
              <p>{error.response.data.message}</p>
            )}
          </div>

          <div>
            <Link>
              <button className="setings-pwd-btn" onClick={handleSubmit}>
                Change Password
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Security;
