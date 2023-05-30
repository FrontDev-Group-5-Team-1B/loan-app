import React from "react";
import profile from "../../assets/profile-pic.png";
import Buttons from "../layouts/Buttons";
import "../../styles/profile.css";

function Profile() {
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
          <button className="cancle">Cancle</button>
          <button className="save">Save</button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
