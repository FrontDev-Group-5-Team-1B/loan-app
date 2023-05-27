import React from "react";
import profile from "../../assets/portrait-good-looking-tender-woman-keeps-hand-neck-smiles-gently-has-shy-expression-while-talks-with-boyfriend-rejoices-nice-moment-life-receives-heartwarming-compliment 2 (1).png";
import Buttons from "../layouts/Buttons";

function Profile() {
  return (
    <div>
      <section>
        <h3>Profile</h3>
        <div>
          <h4>Personal Information</h4>
          <form>
            <div className="profile-input">
              <div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div>
          <h4>Admin Information</h4>
          <p>Change Admin information</p>
        </div>
        <form>
          <div>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </form>
      </section>

      <section>
        <div>
          <h4>Profile Picture</h4>
          <img src={profile} alt="" />
          <a href="#">Change Profile Picture</a>
          <a href="#">Remove Profile Picture</a>
        </div>
        <Buttons />
      </section>
    </div>
  );
}

export default Profile;
