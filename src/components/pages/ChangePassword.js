import React from 'react'
import changepassword from "../../assets/5568706 1.png"
import Buttons from '../layouts/Buttons'

const ChangePassword = () => {
  return (
    <div>
        <img src={changepassword} alt=""/>
        <p>Your password has been changed. To confirm, Kindly log into your account</p>
        <Buttons/>
    </div>
  )
}

export default ChangePassword