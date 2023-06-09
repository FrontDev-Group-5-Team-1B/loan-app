import { useRef, useState, useEffect } from "react";
import "../../loginstyle/login.css";
import logimg from "../../assets/Rectangle 762-min.png";
import fgpimg from "../../assets/Group 250.png";
import fgpimgcheck from "../../assets/checked 1.png";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import google from "../../assets/logos_google-icon.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useLogin,
  useVerifyToken,
  useResetPassword,
  useGetToken,
} from "../../services/query/query.service";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "../loaders/Loader.component";
import { GetToken } from "../../services/api/api.service";

const LogIn = ({ auth, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret_key, setSecretKey] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token1, setToken1] = useState("");
  const [token2, setToken2] = useState("");
  const [token3, setToken3] = useState("");
  const [token4, setToken4] = useState("");
  const [token5, setToken5] = useState("");
  // above token states should be structured with objects

  //form validation
  const [errorMsg, setErrorMsg] = useState("");

  const { handleSubmit, register, formState: { errors } } = useForm();


  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const closeref = useRef();
  const modref = useRef();
  const modref2 = useRef();
  const modref3 = useRef();
  const modref4 = useRef();

  const pp = useRef();

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
    console.log(res.data);

    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("adminId", res.data.adminId);
    setAuth(!auth);

    navigate("/dashboard");
  };

  const onGetTokenSuccess = (res) => {
    console.log(res);
    handleTwo();
  };
  const onVerifyTokenSuccess = (res) => {
    console.log(res);
    handleThree();
  };
  const onResetPassordSuccess = (res) => {
    console.log(res);
    handleFour();
  };

  const onError = (err) => {
    console.log(err);
    setErrorMsg(err.response.data.message);
  };

  const { mutate: getToken } = useGetToken(onGetTokenSuccess, onError);
  const { mutate, isLoading, error, isSuccess } = useLogin(onSuccess, onError);
  const { mutate: verify } = useVerifyToken(onVerifyTokenSuccess, onError);
  const { mutate: reset } = useResetPassword(onResetPassordSuccess, onError);

  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    const formData = { email, password };
    mutate(formData);
  };
  // const {refetch} = useQuery(['password', email], () => GetToken(email), {onGetTokenSuccess, onError})

  const handleGetToken = (e) => {
    e.preventDefault();

    console.log("clicked");
    // refetch()
    getToken(email);
    // useGetToken(email, onGetTokenSuccess, onError); //interchage parameter if not work
  };

  const handleReset = (e) => {
    e.preventDefault();

    const data = { secret_key, password, confirmPassword };

    reset({ email, data });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth]);

  const HandleVerifyToken = (e) => {
    e.preventDefault();
    const fiveDigitToken = Number(`${token1}${token2}${token3}${token4}${token5}`);
    console.log(fiveDigitToken);

    if (fiveDigitToken) {
      verify({ email, fiveDigitToken });
    }

   

  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email address:"
                className="loginput"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                {...register("email", {
                  required: "Email Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              <p className="val-message">
                {errors.email && errors.email.message}
              </p>
  
              <div className="pass">
                <input
                  type={showPassword === false ? "password" : "text"}
                  placeholder="Password:"
                  className="pa"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  {...register("password", {
                    required: "Password Required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#?$%^&*_-()+=])[a-zA-Z0-9!@#?$%^&*_-()+=]{8,20}$/,
                      message:
                        "Password requirements: more than 8 characters, 1 Uppercase, 1 Number, 1 symbol.",
                    },
                  })}
                />
  
                <span className="eye">
                  {showPassword === false ? (
                    <BsEyeSlash onClick={togglePassword} />
                  ) : (
                    <BsEye onClick={togglePassword} />
                  )}
                </span>
              </div>

              <p className="val-message">{errors.password && errors.password.message}</p>

              <div className="forgot-box">

              <div className="">
                <input type="checkbox" className="" />
                <label>Always keep me logged in</label>
              </div>
              <p className="forgot" onClick={handleFG}>
                Forgot Password?
              </p>
              </div>
              {error && <p className="val-message">{errorMsg}</p>}
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
            <form className="fgform" onSubmit={handleGetToken}>
              <input
                type="text"
                placeholder="Email address:"
                className="inpt"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <button className="fg-btn" onClick={handleTwo}>
              Send
            </button> */}
              <p className="val-message" ref={pp}>
                {errorMsg}
              </p>
              <button className="fg-btn">Send</button>
              <p className="bk" ref={closeref} onClick={handleClose}>
                Back to sign in
              </p>
            </form>
          </div>
        </div>
        {/* second step */}
        <div className="fgcontainer" ref={modref2}>
          <div className="modal-sign">
            <img src={fgpimg} alt="" className="fgimg" />
            <p className="pp">Enter Verification Code</p>
            <p className="fptxt">Kindly enter the code sent to your mail.</p>
            <form className="fgform2" onSubmit={HandleVerifyToken}>
              <div
                style={{
                  display: "flex",
                  width: "fit",
                  margin: "0 auto",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  placeholder=""
                  className="inptc"
                  name="token"
                  value={token1}
                  onChange={(e) => setToken1(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=""
                  className="inptc"
                  name="token"
                  value={token2}
                  onChange={(e) => setToken2(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=""
                  className="inptc"
                  name="token"
                  value={token3}
                  onChange={(e) => setToken3(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=""
                  className="inptc"
                  name="token"
                  value={token4}
                  onChange={(e) => setToken4(e.target.value)}
                />
                <input
                  type="text"
                  placeholder=""
                  className="inptc"
                  name="token"
                  value={token5}
                  onChange={(e) => setToken5(e.target.value)}
                />
              </div>
  
              <p style={{ paddingTop: "1rem" }} className="code">
                Didn't get the code?{" "}
                <span className="resend">
                  <Link to="#">Resend</Link>
                </span>
              </p>
              <button
                className="fg-btn"
                style={{ marginTop: "3rem", padding: "1rem" }}
              >
                Verify
                {/* <button
              className="fg-btn"
              onClick={handleThree}
              style={{ marginTop: "3rem", padding: "1rem" }}
            >
              Verify */}
              </button>
            </form>
          </div>
        </div>
        {/* third step */}
        <div className="fgcontainer" ref={modref3}>
          <div className="modal-sign">
            <img src={fgpimg} alt="" className="fgimg" />
            <p className="pp">Change Password</p>
            <p className="fptxt">Kindly enter your new password.</p>
            <form className="fgform2" onSubmit={handleReset}>
              <input
                type="text"
                placeholder="Secret key:"
                className="inpt"
                name="secret_key"
                value={secret_key}
                onChange={(e) => setSecretKey(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password:"
                className="inpt"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirn New Password:"
                className="inpt"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
  
              <button
                className="fg-btn"
                style={{ marginTop: "3rem", padding: "1rem" }}
              >
                Change Password
              </button>
              {/* <button
              className="fg-btn"
              onClick={handleFour}
              style={{ marginTop: "3rem", padding: "1rem" }}
            >
              Change Password
            </button> */}
            </form>
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
}

export default LogIn;
