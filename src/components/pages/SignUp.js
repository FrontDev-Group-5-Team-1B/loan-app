import React, { useRef, useState } from "react";

import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import modimg from "../../assets/5568706 1.png";
import { BsEyeSlash } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import google from "../../assets/logos_google-icon.png";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post(
        "https://nodebt-application.onrender.com/api/users/create",
        formData
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  // ////////////////////////
  const closeref = useRef();
  const modref = useRef();

  const handleClose = () => {
    modref.current.style.display = "none";
  };

  return (
    <>
      <div className="signup-container">
        <div className="login-left-box">
          <p className="arrow">
            <Link to="/" className="">
              <FaArrowLeft />
            </Link>
          </p>
          <h2 className="logwel">Create an account</h2>
          <p className="logacc">Sign up to get an account</p>
          <p className="logsign">
            Already have an account?{" "}
            <span>
              <Link to="/login">
                <b>Log in</b>
              </Link>
            </span>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name:"
              className="loginput"
              onChange={handleChange}
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address:"
              className="loginput"
              onChange={handleChange}
            />
            <div className="pass">
              <input
                type="password"
                placeholder="Password:"
                className=" pa"
                id="password"
                name="password"
                onChange={handleChange}
              />
              <span className="eye">
                <BsEyeSlash />
              </span>
            </div>
            <div className="pass">
              <input
                type="password"
                placeholder="Confirm Password:"
                className=" pa"
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleChange}
              />
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
                <FaEnvelope />
              </Link>
              <Link>
                <img src={google} alt="google" />
              </Link>
              <Link>
                <FaApple />
              </Link>
            </div>
          </form>
        </div>
        <div className="login-right-box">
          <img src={logimg} alt="woman" />
        </div>
      </div>
      <div className="modal-container" ref={modref}>
        <p className="close" ref={closeref} onClick={handleClose}>
          X
        </p>
        <div className="modal-sign">
          <img src={modimg} alt="" className="mod-img" />
          <p className="mod-text">
            You now have an account, please go ahead to Log into your account
          </p>
          <Link to="/login">
            <button className="mod-btn">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
