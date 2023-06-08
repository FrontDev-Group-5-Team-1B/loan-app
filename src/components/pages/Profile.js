import React, { useState, useEffect } from "react";
import profile from "../../assets/profile-pic.png";
import "../../styles/profile.css";
import "../../styles/modal.css";
import Modal from "../Modal";
import { useDeleteProfilePicture, useUpdateProfilePiture } from "../../services/query/query.service";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [saveProfile, setSaveProfile] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null)

  const UpdateProfilePicture = useUpdateProfilePiture();
  const DeleteProfilePicture = useDeleteProfilePicture();
  const DownloadProfilePicture = useDeleteProfilePicture()


  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  }

  const handleProfilePictureUpload = () => {
    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    UpdateProfilePicture.mutate(formData)
  };

  const handleDeleteProfilePicture = () => {
    DeleteProfilePicture.mutate();
  }


  const [updateAdmin, setUpdateAdmin] = useState({
    organisationName: "",
    organisationEmail: "",
    numberOfStaff: "",
    staffId: "",
    organisationType: "",
    website: "",
    firstName: "",
    email: "",
    position: "",
    phoneNumber: "",
  });

  const adminId = localStorage.getItem("adminId");
  console.log(adminId);

  const { mutate, isLoading, isError, error } = useMutation((data) => {
    axios.put(
      `https://nodebt-application.onrender.com/api/admins/${adminId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
      {
        onSuccess: () => {
          setSaveProfile(true); // Set saveProfile to true on successful update
        },
      }
    );
    console.log(data);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(updateAdmin);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(updateAdmin);
    setSaveProfile(false);
  };
  useEffect(() => {
    if (saveProfile) {
      const timer = setTimeout(() => {
        setSaveProfile(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [saveProfile]);

  // if (updateProfilePicture.isLoading) {
  //   return <div>Updating profile picture...</div>;
  // }

  // if (updateProfilePicture.isError) {
  //   return <div>Error updating profile picture.</div>;
  // }

  // if (updateProfilePicture.isSuccess) {
  //   return <div>Profile picture updated successfully!</div>;
  // }

  return (
    <div>
      {/* <form className="profile-form"> */}
      <section>
        <div>
          <h4 className="profile-hp">Personal Information</h4>
          <form>
            <div className="profile-inputs">
              <div>
                <input
                  id="organisationName"
                  name="organisationName"
                  type="text"
                  className="profile-input"
                  placeholder="Name of Organization"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  id="organisationEmail"
                  name="organisationEmail"
                  type="text"
                  className="profile-input"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  id="numberOfStaffs"
                  name="numberOfStaffs"
                  type="text"
                  className="profile-input"
                  placeholder="Number of Staff"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  id="staffId"
                  name="staffId"
                  type="text"
                  className="profile-input"
                  placeholder="Identity Number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  id="orgainisationType"
                  name="orgainisationType"
                  type="text"
                  className="profile-input"
                  placeholder="Type of Organization"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  id="website"
                  name="website"
                  type="text"
                  className="profile-input"
                  placeholder="Website"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div>
          <h4 className="profile-hp">Admin Information</h4>
          <p className="profile-hs">Change Admin information</p>
        </div>
        <form>
          <div className="profile-inputs">
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="profile-input"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="text"
                className="profile-input"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                id="position"
                name="position"
                type="text"
                className="profile-input"
                placeholder="Position"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="profile-input"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </section>
      <section>
        <div>
          <h4 className="profile-hp">Profile Picture</h4>
          <img
            src={profile}
            alt="user-profile"
            className="settings-profile-pic"
          />
          <div className="profile-change-btn">
            <input type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}/>
            <button onClick={handleProfilePictureUpload}>
            <a href="#">Change Profile Picture</a>
            </button>
            <button onClick={handleDeleteProfilePicture}>
            <a href="#">Remove Profile Picture</a>
            </button>
           
          </div>
        </div>
        <div className="cancle-save-btn">
          <button className="cancle" onClick={() => setShowModal(true)}>
            Cancle
          </button>
          {/* <button className="cancle" onClick={() => setShowModal(true)}> */}
          {showModal && (
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <div className="profile-modal-content">
                <p>Are you sure you want to cancle changes</p>
                <div className="yes_no">
                  <p className="yes" onClick={() => setShowModal(false)}>
                    Yes
                  </p>
                  <p className="no" onClick={() => setShowModal(false)}>
                    No
                  </p>
                </div>
              </div>
            </Modal>
          )}
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
          {saveProfile && (
            <Modal show={saveProfile} onClose={() => setSaveProfile(false)}>
              <div className="profile-modal2-content">
                <p>Your Settings has already been saved</p>
              </div>
            </Modal>
          )}
        </div>
      </section>
    </div>
  );
}

export default Profile;
