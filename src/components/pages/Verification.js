import React from 'react'
import changepassword from "../../assets/5568706 1.png"

const Verification = () => {
  return (
    <div>
        <img src={changepassword} alt="verification"/>
        <h4>Enter Verification Code</h4>
        <p>Kindly enter the code sent to your email</p>
        <div>
            <p>Didn't get the code? Resend</p>
            <button>Verify</button>
        </div>
    </div>
  )
}

export default Verification