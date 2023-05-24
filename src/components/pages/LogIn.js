import React, {useRef} from "react";
import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import fgpimg from "../../assets/Group 250.png";
import { BsEyeSlash } from "react-icons/bs";
import {FaEnvelope} from "react-icons/fa"
import {FaApple} from "react-icons/fa"
import {FaArrowLeft} from 'react-icons/fa'
import google from '../../assets/logos_google-icon.png'
import { Link } from "react-router-dom";

const LogIn = () => {
  const closeref = useRef()
  const modref = useRef()

  const handleClose =()=>{
    modref.current.style.display = "none"
  }
  const handleFG =()=>{
    modref.current.style.display= "block"
  }
  return (
    <>
    <div className="login-container">
      <div className="login-left-box">
        <p className="arrow">

        <Link to="#" className=""><FaArrowLeft /></Link>
        </p>
        <h2 className="logwel">Welcome Back</h2>
        <p className="logacc">Log into your account</p>
        <p className="logsign">
          Don't have an account?{" "}
          <span>
            <Link to="/signup"><b>Sign up</b></Link>
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

          <p className="forgot" onClick={handleFG}>Forgot Password?</p>
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
      <div className='fgcontainer' ref={modref}>
      <div className='modal-sign'>
        <img src={fgpimg} alt="" className="fgimg"/>
        <p className="pp">Forgot Password</p>
        <p className='fptxt'>Kindly insert your email below, a verification code will be sent to you, make sure you enter the correct email.</p>
        <div className="fgform">
          <input type="text" placeholder="Email address:" className="inpt"/>
        <button className='fg-btn'>Send</button>
        <p className="bk" ref={closeref} onClick={handleClose}>Back to sign in</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default LogIn;
