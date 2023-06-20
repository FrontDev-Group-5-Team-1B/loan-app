import React, { useState, useRef } from "react";
import "../../styles/security.css";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import axios from "axios";
import { useForm } from "react-hook-form";
import fgpimg from "../../assets/5568706 1.png";


const Security = () => {
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const modref = useRef();

  // const [errorMessage, setErrorMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  


  const { mutate, error } = useMutation(
    (data) =>
      axios.put(
        `https://nodebt-application.onrender.com/api/admins/${localStorage.getItem(
          "adminId"
        )}/change-password`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ),
      {
      onSuccess:(result)=>{
        setSuccess(result.data.message)
      },


        onError: (err) => {
          console.log(err);
          setErrorMsg(err.response.data.message)
        }
      }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChangePassword((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onPasswordChange = (data) => {
    console.log(data)

    // if (changePassword.newPassword !== changePassword.confirmNewPassword) {
    //   // Handle password mismatch error
    //   return;
    // }
    const changePassword = {
      oldPassword: data.oldPassword,
    newPassword: data.newPassword,
    confirmNewPassword: data.confirmNewPassword,
    }

    mutate(changePassword);
  };

  return (
    <div>
      <h4 className="profile-hp">Password Settings</h4>
      <p className="sec-text">
        Make sure a strong password is used, this is to ensure maximum security
        of your data
      </p>
      <div>
        <form className="sec-form">
          <div className="sec-inputs">
            <div className="bod" style={{marginBottom:0, marginTop:0,background: "#fafcff"}}>
              <input
                id="oldPassword"
                name="oldPassword"
                type="text"
                className="profile-input"
                placeholder="Old Password"
                onChange={handleChange}
                {...register("oldPassword", {
                  required: "Old password Required",
                })}
              />
               
              <p className="val-message">{errors.oldPassword && errors.oldPassword.message}</p>
            </div>
            <div className="pass" style={{marginBottom:0, marginTop:0,background: "#fafcff", borderColor: "#666666"}}>
              <input
                id="newPassword"
                name="newPassword"
                type={showPassword === false ? "password" : "text"}
                className="profile-input"
                placeholder="New Password"
                onChange={handleChange}
                {...register("newPassword", {
                  required: "New password Required",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#?$%^&*_-])[a-zA-Z0-9!@#?$%^&*_-]{8,20}$/,
                    message: "Password requirements: more than 8 characters, 1 Uppercase,1 lowercase, 1 Number, 1 symbol."
                  }
                })}
              />
              <span className="eye">
              {showPassword === false ? (
                    <BsEyeSlash size="20px" onClick={togglePassword} />
                  ) : (
                    <BsEye size="20px" onClick={togglePassword} />
                  )}
              </span>
      
              <p className="val-message">{errors.newPassword && errors.newPassword.message}</p>
            </div>
            <div className="pass" style={{marginBottom:0, marginTop:0,background: "#fafcff", borderColor: "#666666"}}>
              <input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type={showPassword2 === false ? "password" : "text"}
                className="profile-input"
                placeholder="Confirm New Password"
                onChange={handleChange}
                {...register("confirmNewPassword", {
                  required: "Confirm new password Required",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#?$%^&*_-])[a-zA-Z0-9!@#?$%^&*_-]{8,20}$/,
                    message: "Password requirements: must be the same with password"
                  }
                })}
              />
              <span className="eye">
              {showPassword2 === false ? (
                    <BsEyeSlash size="20px" onClick={togglePassword2} />
                  ) : (
                    <BsEye size="20px" onClick={togglePassword2} />
                  )}
              </span>
              <p className="val-message">{errors.confirmNewPassword && errors.confirmNewPassword.message}</p>
            </div>
          
            {/* {error?.response?.data?.message && (
              <p>{error.response.data.message}</p>
            )} */}
            {success && <p style={{textAlign:"center", color:"green", fontSize:"20px"}}>{success}</p>}
            {error && <p className="val-message">{errorMsg}</p>}
          </div>

          <div>
            <Link>
              <button className="setings-pwd-btn" onClick={handleSubmit(onPasswordChange)}>
                Change Password
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="fgcontainer" ref={modref}>
          <div className="modal-sign">
            <img src={fgpimg} alt="" className="" width="300px"/>
            <p className="fptxt">
            Your password has been changed. To confirm, kindly log into your account
            </p>
            <form className="fgform">
            <Link to="/login"><button
              className="fg-btn2"
              style={{ margin: "10px", width:"100%", padding: "1rem" }}
            >
              Log into your account
            </button>
            </Link>
            <Link to="/dashboard"><button
              className="fg-btn2"
              style={{margin: "10px",backgroundColor:"transparent",border:"1px",borderStyle:"solid",borderColor:"#FF2727",color:"#FF2727", width:"100%", padding: "1rem" }}
            >
              Cancel
            </button>
            </Link>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Security;
