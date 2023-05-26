import React from 'react'
import profile from "../../assets/portrait-good-looking-tender-woman-keeps-hand-neck-smiles-gently-has-shy-expression-while-talks-with-boyfriend-rejoices-nice-moment-life-receives-heartwarming-compliment 2 (1).png"
import Buttons from '../layouts/Buttons'

function Profile() {
  return (
    <div>
        <section>
        <div>
        <h3>Profile</h3>
        <h3>Notifications</h3>
        <h3>Security</h3>
        </div>
        <div>
            <h4>Personal Information</h4>
            <form>
                <div>
                    <div><input type="text"/></div>
                    <div><input type="text"/></div>
                    <div><input type="text"/></div>
                </div>
                <div>
                <div><input type="text"/></div>
                <div><input type="text"/></div>
                <div><input type="text"/></div>
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
                <div><input type="text"/></div>
                <div><input type="text"/></div>
                </div>
                <div>
                <div><input type="text"/></div>
                <div><input type="text"/></div>
                </div>
            </form>
            </section>

            <section>
                <div>
                    <h4>Profile Picture</h4>
                    <img src={profile} alt=""/>
                    <a href="#">Change Profile Picture</a>
                    <a href="#">Remove Profile Picture</a>
                </div>
                <Buttons/>
            </section>
        </div>
  )
}

export default Profile