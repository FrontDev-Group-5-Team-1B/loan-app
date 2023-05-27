import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Dashboard.css";

const BorrowerData = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="borowers-container">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrowers's details</p>
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
          <button className="b-btn" onClick={handleClick}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default BorrowerData;
