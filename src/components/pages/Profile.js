import React, { useState, useEffect, useRef } from "react";
import profile from "../../assets/profile-pic.png";
import "../../styles/profile.css";
import "../../styles/modal.css";
import Modal from "../Modal";
import {
  useDeleteProfilePicture,
  useUpdateProfilePicture,
} from "../../services/query/query.service";
import { useMutation, useQuery } from "react-query";
import axios from "axios";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [saveProfile, setSaveProfile] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');
  const [imageUrl, setImageUrl] = useState('')

  const onSuccess = (data) => {
    console.log('data')
  }

  const onError = (error) => {
    console.log(error)
  }
  const {mutate: UploadPicture} = useUpdateProfilePicture(onSuccess, onError);
  const DeleteProfilePicture = useDeleteProfilePicture();

  const DownloadProfilePicture = useDeleteProfilePicture();
  const [profileUrl, setProfileUrl] = useState(null);
  const inputRef = useRef(null);
  // const handleProfilePictureUpload = () => {
  //   const formData = new FormData();
  //   formData.append("profileImage", profilePicture);
  //   UpdateProfilePicture.mutate(formData);



  // const handleProfilePictureChange = (event) => {
  //   const file = event.target.files[0];
  //   setProfilePicture(file);
    
  //   const formData = new FormData();
  //   formData.append("profileImage", profilePicture);
  //   UpdateProfilePicture.mutate(formData);
  // };

  const handleDeleteProfilePicture = () => {
    DeleteProfilePicture.mutate();
  };
  //New code for profile picture upload starts here///////
  const uploadProfilePic = async (file) => {
    const formData = new FormData();
    formData.append("profileImage", file);

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.put(
      `https://nodebt-application.onrender.com/api/admins/${localStorage.getItem(
        "adminId"
      )}/profile-picture`,
      formData,
      config
    );

    return response.data;
  };

  const mutation = useMutation(uploadProfilePic);

  const handleFileUploads = async (e) => {
    const file = inputRef.current?.files[0];
    if (file) {
      try {
        const response = await mutation.mutateAsync(file);
        // Handle the successful upload
        console.log("Profile picture uploaded successfully");

        const additionalResponse = await axios.get(
          `https://nodebt-application.onrender.com/api/admins/${localStorage.getItem(
            "adminId"
          )}/profile-picture`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
        // Handle the successful additional response
        console.log("Additional response received successfully");
        setProfileUrl(additionalResponse.data.data.imageUrl);

        console.log(additionalResponse.data.data.imageUrl);
        // Update the profileUrl state with the new image URL
        setProfileUrl(additionalResponse.data.data.imageUrl);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("No file selected");
    }
  };
  //New code for profile picture upload ends here///////

<<<<<<< HEAD
  //Code for Deleting profile picture starts here///////

  // const deleteProfileImage = async () => {
  //   const url = `https://nodebt-application.onrender.com/api/users/${localStorage.getItem(
  //     "adminId"
  //   )}/profile-picture`;

  //   try {
  //     const response = await axios.delete(url, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Failed to delete profile image");
  //   }
  // };

  // const ProfileImageDeleteButton = () => {
  //   const { mutate } = useMutation(deleteProfileImage);

  //   const handleDeleteImage = () => {
  //     mutate();
  //   };

  //   return handleDeleteImage;
  // };

  // // Usage:
  // const handleDeleteImage = ProfileImageDeleteButton();
  const handleDeleteImage = () => {
    setProfileUrl("");
  };

  //Code for Deleting profile picture ends here///////
=======
>>>>>>> 784bbeff0966bd188fd206afe61dbd2bffc7f4c2

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

  const { mutate, isLoading, isError, error } = useMutation(
    (data) => {
      axios
        .put(
          `https://nodebt-application.onrender.com/api/admins/${adminId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          console.log("Response:", response.data.data.admin);
          return response; // Return the response to the caller
        });
    },
    {
      onSuccess: () => {
        setSaveProfile(true); // Set saveProfile to true on successful update
      },
    },
    {
      onError: (error) => {
        // Handle the error here
        console.error("An error occurred:", error);
        error.preventDefault();
      },
    }
  );

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

  return (
    <div>
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
                  id="organisationType"
                  name="organisationType"
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

          {profileUrl ? (
            <img
              src={profileUrl}
              alt="Profile"
              className="settings-profile-pic"
            />
          ) : (
            <img src={profile} alt="Default" className="settings-profile-pic" />
          )}
         
          <div className="profile-change-btn">
            <div>
              <label className="profile-pic-change">
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={inputRef}
                  onChange={handleFileUploads}
                />
                Change Profile Picture
              </label>
              <button
                onClick={() => inputRef.current.click()}
                className="change-pic-btn"
              ></button>
            </div>
<<<<<<< HEAD
            <button onClick={handleDeleteImage} className="profile-pic-remove">
              Remove Profile Picture
            </button>
=======

            <button onClick={handleDeleteProfilePicture}>
            <a href="#">Remove Profile Picture</a>
            </button> 
>>>>>>> 784bbeff0966bd188fd206afe61dbd2bffc7f4c2
          </div>
        </div>
        <div className="cancle-save-btn">
          <button className="cancle" onClick={() => setShowModal(true)}>
            Cancle
          </button>

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
