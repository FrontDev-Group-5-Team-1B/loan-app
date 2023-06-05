import React from "react";
import DbNav from "../layouts/DbNav";
import forgotImg from "../../assets/5568706 1.png";
import "../../styles/forgotPassword.css";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const history = useNavigate();
  return (
    <>
      <DbNav />
      <div className="forgot-container">
        <div className="forgot-content">
          <div className="forgot-img">
            <img src={forgotImg} />
          </div>
          <div className="forgot-text">
            <p>
              Your password has been changed. To confirm, kindly log into your
              account
            </p>
          </div>
          <div className="fotgot-btns">
            <Link to="/login" className="forgot-link">
              <buton className="forgot-btn forgot-login">Login</buton>
            </Link>

            <buton
              className="forgot-btn forgot-cancle"
              onClick={() => history(-1)}
            >
              Cancle
            </buton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
