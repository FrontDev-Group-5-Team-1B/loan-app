import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { RxDotFilled } from "react-icons/rx";

const Borrow = () => {

  return (
    <div className="borrow-wrap dash-wrapper">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Personal and contact information</h5>
        <form>
          <div className="b-data">
            <div className="b-data1">
              <div>
                <input type="text" placeholder="name" className="placeholder" />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Employment"
                  className="placeholder"
                />
              </div>
            </div>
            <div className="b-data2">
              <div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Date of Birth"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="National Identity Number"
                  className="placeholder"
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Income per month"
                  className="placeholder"
                />
              </div>
            </div>
          </div>
          <div className="car-dot">
            <p className="p1">
              <RxDotFilled />
            </p>
            <Link
              to="/dashboard/borrowerloan_info"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <p>
                <RxDotFilled />
              </p>
            </Link>
            <p>
              <RxDotFilled />
            </p>
            <p>
              <RxDotFilled />
            </p>
          </div>
        </form>
      </div>
      <div className="s-btn">
        <button type="submit" className="b-btn">
          <Link
            to="/dashboard/borrowerloan_info"
            style={{ textDecoration: "none", color: "white" }}
          >
            Next
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Borrow;
