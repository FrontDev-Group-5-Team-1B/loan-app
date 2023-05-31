import React from 'react'
import changepassword from "../../assets/5568706 1.png"

const ChangePassword = () => {
  return (
    <div>
        <img src={changepassword} alt=""/>
        <p>Your password has been changed. To confirm, Kindly log into your account</p>
        <div>
          <input type="text" placeholder="New Password:"/>
          <input type="text" placeholder="Confirm New Password:"/>
        </div>
        <Navlink to="PasswordSuccess"><button>Change Password</button></Navlink>
    </div>
  )
}

export default ChangePassword