import { useRef, useState, useEffect } from "react";
import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import fgpimg from "../../assets/Group 250.png";
import fgpimgcheck from "../../assets/checked 1.png";
import { BsEyeSlash } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import google from "../../assets/logos_google-icon.png";
import { Link } from "react-router-dom";
import { useLogin } from "../../services/query/query.service";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "../loaders/Loader.component";

const LogIn = ({ auth, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const closeref = useRef();
  const modref = useRef();
  const modref2 = useRef();
  const modref3 = useRef();
  const modref4 = useRef();

  const handleClose = () => {
    modref.current.style.display = "none";
  };
  const handleClose4 = () => {
    modref4.current.style.display = "none";
  };
  const handleFG = () => {
    modref.current.style.display = "block";
  };

  const handleTwo = () => {
    modref.current.style.display = "none";
    modref2.current.style.display = "block";
  };
  const handleThree = () => {
    modref2.current.style.display = "none";
    modref3.current.style.display = "block";
  };
  const handleFour = () => {
    modref3.current.style.display = "none";
    modref4.current.style.display = "block";
  };

  const onSuccess = (res) => {
    console.log(res);
    setAuth(!auth);
  };

  const onError = (err) => {
    console.log(err);
  };

  const { mutate, isLoading, error, isSuccess } = useLogin(onSuccess, onError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log(formData);
    mutate(formData);
  };

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth]);
  return (
    <>
      <div className="login-container">
        <div className="login-left-box">
          <p className="arrow">
            <Link to="/" className="">
              <FaArrowLeft />
            </Link>
          </p>
          <h2 className="logwel">Welcome Back</h2>
          <p className="logacc">Log into your account</p>
          <p className="logsign">
            Don't have an account?{" "}
            <span>
              <Link to="/signup">
                <b>Sign up</b>
              </Link>
            </span>
          </p>
          {isLoading ? (
            <div className="dots">
            <ThreeDots />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address:"
                className="loginput"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass">
                <input
                  type="password"
                  placeholder="Password:"
                  className="pa"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="eye">
                  <BsEyeSlash />
                </span>
              </div>

              <div className="forgot-box">
              <div>
                <input type="checkbox" className="" />
                <label style={{fontSize:"14px"}}>Always keep me logged in</label>
              </div>
              <p className="forgot" onClick={handleFG}>
                Forgot Password?
              </p>
              </div>
              <button className="log-btn">Log In</button>
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
          )}
        </div>
        <div className="login-right-box">
          <img src={logimg} alt="woman" />
        </div>

        {/* forgot password */}
        <div className="fgcontainer" ref={modref}>
          <div className="modal-sign">
            <img src={fgpimg} alt="" className="fgimg" />
            <p className="pp">Forgot Password</p>
            <p className="fptxt">
              Kindly insert your email below, a verification code will be sent
              to you, make sure you enter the correct email.
            </p>
            <div className="fgform">
              <input
                type="text"
                placeholder="Email address:"
                className="inpt"
              />
              <button className="fg-btn" onClick={handleTwo}>
                Send
              </button>
              <p className="bk" ref={closeref} onClick={handleClose}>
                Back to sign in
              </p>
            </div>
          </div>
        </div>
        {/* second step */}
        <div className="fgcontainer" ref={modref2}>
          <div className="modal-sign">
            <img src={fgpimg} alt="" className="fgimg" />
            <p className="pp">Enter Verification Code</p>
            <p className="fptxt">Kindly enter the code sent to your mail.</p>
            <div className="fgform2">
              <input type="text" placeholder="" className="inptc" />
              <input type="text" placeholder="" className="inptc" />
              <input type="text" placeholder="" className="inptc" />
              <input type="text" placeholder="" className="inptc" />
              <input type="text" placeholder="" className="inptc" />

              <p style={{ paddingTop: "1rem" }} className="code">
                Didn't get the code?{" "}
                <span className="resend">
                  <Link to="#">Resend</Link>
                </span>
              </p>
              <button
                className="fg-btn"
                onClick={handleThree}
                style={{ marginTop: "3rem", padding: "1rem" }}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
        {/* third step */}
        <div className="fgcontainer" ref={modref3}>
          <div className="modal-sign">
            <img src={fgpimg} alt="" className="fgimg" />
            <p className="pp">Change Password</p>
            <p className="fptxt">Kindly enter your new password.</p>
            <div className="fgform2">
              <input type="text" placeholder="New Password:" className="inpt" />
              <input
                type="text"
                placeholder="Confirn New Password:"
                className="inpt"
              />

              <button
                className="fg-btn"
                onClick={handleFour}
                style={{ marginTop: "3rem", padding: "1rem" }}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        {/* final step */}
        <div className="fgcontainer" ref={modref4}>
          <div className="modal-sign">
            <img src={fgpimgcheck} alt="" className="fgimg" />

            <p className="fptxt tw">
              Your password change process is successful. You now have a new
              password.
            </p>
            <button
              className="fg-btn2"
              onClick={handleClose4}
              style={{ marginTop: "3rem", padding: "1rem" }}
            >
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
