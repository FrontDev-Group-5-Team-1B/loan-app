import React from 'react'
import Checked from "../../assets/checked 1.png"
import { NavLink } from 'react-router-dom'

const PasswordSucess = () => {
  return (
    <div>
        <img src={Checked} alt="checked"/>
        <p>Your password change process is successful. You now have a new password.</p>
        <NavLink to="LogIn"><button>Log into your account</button></NavLink>
    </div>
  )
}

export default PasswordSucess