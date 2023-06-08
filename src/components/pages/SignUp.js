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


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const closeref = useRef();
  const modref = useRef();
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
    setErrorMsg(err.response.data.message)
  };

  const { mutate, error, isLoading } = useSignup(onSuccess, onError);

  const handleClose = () => {
    modref.current.style.display = "none";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      const  formData = {firstName, lastName, email, organisationName, password, confirmPassword}
      console.log(formData)
      mutate(formData)
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
          {isLoading ? <div className="dots"><ThreeDots /></div> : <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name:"
              className="loginput"
              name="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name:"
              className="loginput"
              name="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email address:"
              className="loginput"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Organisation Name:"
              className="loginput"
              name="organisation"
              value={organisationName}
              onChange={(e) => setOrganisationName(e.target.value)}
            />
            <div className="pass">
              <input
                type={showPassword === false ? "password" : "text"}
                placeholder="Password:"
                className="pa"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="eye">
              {showPassword === false ? (
                    <BsEyeSlash onClick={togglePassword} />
                  ) : (
                    <BsEye onClick={togglePassword} />
                  )}
              </span>
            </div>
            <div className="pass">
              <input
                type={showPassword === false ? "password" : "text"}
                placeholder="Confirm Password:"
                className=" pa"
                name="confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassoword(e.target.value)}
              />
              <span className="eye">
              {showPassword === false ? (
                    <BsEyeSlash onClick={togglePassword} />
                  ) : (
                    <BsEye onClick={togglePassword} />
                  )}
              </span>
            </div>
            
            {error && <p className="val-message">{errorMsg}</p>}
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
          </form>}
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
