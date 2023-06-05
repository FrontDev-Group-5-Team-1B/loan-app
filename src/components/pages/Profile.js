import React, { useState, useEffect } from "react";
import profile from "../../assets/profile-pic.png";
import "../../styles/profile.css";
import "../../styles/modal.css";
import Modal from "../Modal";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [saveProfile, setSaveProfile] = useState(false);

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
                  type="text"
                  className="profile-input"
                  placeholder="Name of Organization"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="profile-input"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="profile-input"
                  placeholder="Number of Staff"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="profile-input"
                  placeholder="Identity Number"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="profile-input"
                  placeholder="Type of Organization"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="profile-input"
                  placeholder="Website"
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
              <input type="text" className="profile-input" placeholder="Name" />
            </div>
            <div>
              <input
                type="text"
                className="profile-input"
                placeholder="Email Address"
              />
            </div>

            <div>
              <input
                type="text"
                className="profile-input"
                placeholder="Position"
              />
            </div>
            <div>
              <input
                type="text"
                className="profile-input"
                placeholder="Phone Number"
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
            <a href="#">Change Profile Picture</a>
            <a href="#">Remove Profile Picture</a>
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
          <button className="save" onClick={() => setSaveProfile(true)}>
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
