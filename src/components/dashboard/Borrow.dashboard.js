import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { RxDotFilled } from "react-icons/rx";

const Borrow = ({fullname, email, address, employmentType, phoneNumber, age, gender, maritalStatus, jobRole, jobSector, nationalIdentityNumber, incomePerMonth, handleChange, page}) => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log('hello')
  // }

  return (
    <div className="borrow-wrap dash-wrapper" style={page === 1 || page === "open" ? {display: "block"} : {display: "none"}}>
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Personal and contact information</h5>
        
          <div className="b-data">
            <div className="b-data1">

              <label htmlFor="fullname">
                <input type="text" 
                name="fullname" 
                value={fullname} 
                onChange={handleChange} 
                placeholder="Full Name" 
                className="placeholder" />
              </label>

              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  value={email} 
                  onChange={handleChange}
                  placeholder="Email"
                  className="placeholder"
                />
              </label>

              <label htmlFor="address">
                <input
                  type="text"
                  name="address"
                  value={address} 
                  onChange={handleChange}
                  placeholder="Address"
                  className="placeholder"
                />
              </label>

              <label htmlFor="employment_type">
                <input
                  type="text"
                  name="employmentType"
                  value={employmentType} 
                  onChange={handleChange}
                  placeholder="Employment"
                  className="placeholder"
                />
              </label>

              <label htmlFor="age">
                <input
                  type="number"
                  name="age"
                  value={age} 
                  onChange={handleChange}
                  placeholder="Age"
                  className="placeholder"
                />
              </label>

              <label htmlFor="marital_status">
                <input
                  type="text"
                  name="maritalStatus"
                  value={maritalStatus} 
                  onChange={handleChange}
                  placeholder="Marital Status"
                  className="placeholder"
                />
              </label>
            </div>

            <div className="b-data2">
              <label htmlFor="phone_number">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={phoneNumber} 
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="placeholder"
                />
              </label>

              <label htmlFor="gender">
                <input
                  type="text"
                  name="gender"
                  value={gender} 
                  onChange={handleChange}
                  placeholder="Gender"
                  className="placeholder"
                />
              </label>

              <label htmlFor="job_role">
                <input
                  type="text"
                  name="jobRole"
                  value={jobRole} 
                  onChange={handleChange}
                  placeholder="Job Role"
                  className="placeholder"
                />
              </label>

              <label htmlFor="job_sector">
                <input
                  type="text"
                  name="jobSector"
                  value={jobSector} 
                  onChange={handleChange}
                  placeholder="Job Sector"
                  className="placeholder"
                />
              </label>

              <label htmlFor="national-id">
                <input
                  type="number"
                  name="nationalIdentityNumber"
                  value={nationalIdentityNumber} 
                  onChange={handleChange}
                  placeholder="National Identity Number"
                  className="placeholder"
                />
              </label>
              <label htmlFor="income">
                <input
                  type="number"
                  name="incomePerMonth"
                  value={incomePerMonth} 
                  onChange={handleChange}
                  placeholder="Income per month"
                  className="placeholder"
                />
              </label>
            </div>
          </div>
          <div className="car-dot">
            <p className="p1">
              <RxDotFilled size="25px"/>
            </p>
            {/* <Link
              to="/dashboard/borrowerloan_info"
              style={{ textDecoration: "none" }}
            > */}
              {" "}
              <p>
                <RxDotFilled size="25px"/>
              </p>
            {/* </Link> */}
            <p>
              <RxDotFilled size="25px"/>
            </p>
            <p>
              <RxDotFilled size="25px"/>
            </p>
          </div>
      
      </div>
      {/* <div className="s-btn">
        <button type="submit" className="b-btn">
          <Link
            to="/dashboard/borrowerloan_info"
            style={{ textDecoration: "none", color: "white" }}
          >
            Next
          </Link>
        </button>
      </div> */}
    </div>
  );
};

export default Borrow;
