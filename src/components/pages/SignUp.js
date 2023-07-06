import { useRef, useState } from "react";
import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import modimg from "../../assets/5568706 1.png";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import google from "../../assets/logos_google-icon.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../services/query/query.service";
import { ThreeDots } from "../loaders/Loader.component";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { GoogleLogin } from '@react-oauth/google';

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalIsOpen, setModalisopen] = useState(false);
  const closeref = useRef();
  const modref = useRef();
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response data here
  };
  //form validation
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSuccess = () => {
    navigate("/login");
  };
  const onError = (err) => {
    console.log(err);
    setErrorMsg(err.response.data.message);
  };

  const { mutate, error, isLoading } = useSignup(onSuccess, onError);

  const handleClose = () => {
    modref.current.style.display = "none";
  };
  const onSubmit = (data) => {
    const firstName = data.firstname;
    const lastName = data.lastname;
    const email = data.email;
    const organisationName = data.organisation;
    const password = data.password;
    const confirmPassword = data.confirm;
    const formData = {
      firstName,
      lastName,
      email,
      organisationName,
      password,
      confirmPassword,
    };
    console.log(formData);
    mutate(formData);
  };

  return (
    <>
      <div className="signup-container">
        <div className="login-left-box">
          <p className="arrow">
            <Link to="/" className="">
              <FaArrowLeft size="20px" />

    <div className="signup-container">
      <div className="login-left-box">
        <p className="arrow">
        <Link to="/" className=""><FaArrowLeft /></Link>
        </p>
        <h2 className="logwel">Create an account</h2>
        <p className="logacc">Sign up to get an account</p>
        <p className="logsign">
          Already have an account?{" "}
          <span>
            <Link to="/login"><b>Log in</b></Link>
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
          {isLoading ? (
            <div className="dots">
              <ThreeDots />
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="First Name:"
                className="loginput"
                name="firstname"
                {...register("firstname", {
                  required: "First name Required",
                })}
              />
              <p className="val-message">
                {errors.firstname && errors.firstname.message}
              </p>

              <input
                type="text"
                placeholder="Last Name:"
                className="loginput"
                name="lastname"
                {...register("lastname", {
                  required: "Last name Required",
                })}
              />
              <p className="val-message">
                {errors.lastname && errors.lastname.message}
              </p>

              <input
                type="email"
                placeholder="Email address:"
                className="loginput"
                name="email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              <p className="val-message">
                {errors.email && errors.email.message}
              </p>

              <input
                type="text"
                placeholder="Organisation Name:"
                className="loginput"
                name="organisation"
                {...register("organisation", {
                  required: "Organisation name Required",
                })}
              />
              <p className="val-message">
                {errors.organisation && errors.organisation.message}
              </p>

              <div className="pass">
                <input
                  type={showPassword === false ? "password" : "text"}
                  placeholder="Password:"
                  className="pa"
                  name="password"
                  {...register("password", {
                    required: "Password Required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#?$%^&*])[a-zA-Z0-9!@#?$%^&*]{8,20}$/,
                      message:
                        "Password requirements: more than 8 characters, 1 Uppercase,1 lowercase, 1 Number, 1 symbol.",
                    },
                  })}
                />
                <span className="eye">
                  {showPassword === false ? (
                    <BsEyeSlash size="20px" onClick={togglePassword} />
                  ) : (
                    <BsEye size="20px" onClick={togglePassword} />
                  )}
                </span>
              </div>
              <p className="val-message">
                {errors.password && errors.password.message}
              </p>

              <div className="pass">
                <input
                  type={showPassword === false ? "password" : "text"}
                  placeholder="Confirm Password:"
                  className=" pa"
                  name="confirm"
                  {...register("confirm", {
                    required: "Confirm Password Required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#?$%^&*_-])[a-zA-Z0-9!@#?$%^&*_-]{8,20}$/,
                      message:
                        "Password requirements: must be the same with password",
                    },
                  })}
                />
                <span className="eye">
                  {showPassword === false ? (
                    <BsEyeSlash size="20px" onClick={togglePassword} />
                  ) : (
                    <BsEye size="20px" onClick={togglePassword} />
                  )}
                </span>
              </div>
              <p className="val-message">
                {errors.confirm && errors.confirm.message}
              </p>

              {error && <p className="val-message">{errorMsg}</p>}
              <button
                type="submit"
                onClick={() => setModalisopen(true)}
                className="log-btn"
              >
                Sign Up
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalisopen(false)}
                className="modal-sign"
              >
                <img src={modimg} alt="" className="mod-img" />
                <p className="mod-text">
                  You now have an account, please go ahead to Log into your
                  account
                </p>

                <Link to="/login">
                  <button className="mod-btn">Log In</button>
                </Link>
              </Modal>
            </form>
          )}

            <div className="continue">
              <hr />
              <span>Or continue with</span>
              <hr />
            </div>
            <div className="login-icons">
              {/* <Link>
                <FaEnvelope />
              </Link> */}
              <Link>
              <GoogleLogin
                 clientId="971442954116-mo6drlr37kt7c5tadolni39jiki7eire.apps.googleusercontent.com"
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 buttonText={google}
                 />
                  {/* <img src={google} alt="google" /> */}
               
              </Link>
              {/* <Link>
                <FaApple />
              </Link> */}
            </div>

        </div>
        <div className="login-right-box">
          <img src={logimg} alt="woman" />
        </div>
      </div>
      <div className="modal-container" ref={modref}>
        <p className="close" ref={closeref} onClick={handleClose}>
          X
        </p>
      </div>
    </>
  );
};

export default SignUp;
