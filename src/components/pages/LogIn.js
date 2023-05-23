import React from "react";
import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import { BsEyeSlash } from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa"
import {FaApple} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-left-box">
        <h2 className="logwel">Welcome Back</h2>
        <p className="logacc">Log into your account</p>
        <p className="logsign">
          Don't have an account?{" "}
          <span>
            <b>Sign up</b>
          </span>
        </p>
        <form>
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

          <p className="forgot">Forgot Password?</p>
          <div >
            <input type="checkbox" className="" />
            <label>Always keep me logged in</label>
          </div>
          <button className="log-btn">Log In</button>
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
            <FaGoogle/>
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
  );
};

export default LogIn;
