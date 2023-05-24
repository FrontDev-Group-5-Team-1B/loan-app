import React from 'react'
import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import { BsEyeSlash } from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa"
import {FaApple} from "react-icons/fa"
import {FaArrowLeft} from 'react-icons/fa'
import google from '../../assets/logos_google-icon.png'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="login-left-box">
        <p className="arrow">

        <Link to="#" className=""><FaArrowLeft /></Link>
        </p>
        <h2 className="logwel">Create an account</h2>
        <p className="logacc">Sign up to get an account</p>
        <p className="logsign">
          Already have an account?{" "}
          <span>
            <b>Log in</b>
          </span>
        </p>
        <form>
          <input
            type="text"
            placeholder="Name:"
            className="loginput"
          />
          <input
            type="email"
            placeholder="Email address:"
            className="loginput"
          />
          <div className="pass">
            <input type="password" placeholder="Password:" className=" pa" />
            <span className="eye">
              <BsEyeSlash />
            </span>
          </div>
          <div className="pass">
            <input type="password" placeholder="Confirm Password:" className=" pa" />
            <span className="eye">
              <BsEyeSlash />
            </span>
          </div>

          <button className="log-btn">Sign Up</button>
          <div className="continue">
            <hr />
            <span>Or continue with</span>
            <hr />
          </div>
          <div className="login-icons">
            <Link>
            <FaEnvelope/>
            </Link>
            <Link>
            <img src={google} alt="google"/>
            </Link>
            <Link>
            <FaApple/>
            </Link>
          </div>
        </form>
      </div>
      <div className="login-right-box">
        <img src={logimg} alt="woman" />
      </div>
    </div>
  )
}

export default SignUp