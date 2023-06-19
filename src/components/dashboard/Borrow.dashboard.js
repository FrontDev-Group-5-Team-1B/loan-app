import React from "react";
import "./Dashboard.css";
import { RxDotFilled } from "react-icons/rx";
import useBorrowersDataStore from "../../store/borowersDataStore";


const Borrow = () => {
  const { formData, setFormData } = useBorrowersDataStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue;

    if (name === "incomePerMonth") {
      newValue = parseFloat(value);
    } else if (name === "age") {
      newValue = parseInt(value);
    } else {
      newValue = value;
    }
    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };


  return (
    <div className="borrow-wrap">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data-b">
        <h5>Personal and contact information</h5>
        
          <div className="b-data">
            <div className="b-data1">

              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="name"
                  className="placeholder"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="address">
                <input
                  type="text"
                  placeholder="Address"
                  className="placeholder"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="employment_type">
                <input
                  type="text"
                  placeholder="Employment"
                  className="placeholder"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                />
              </label>

              <select
                name="maritalStatus"
                onChange={handleInputChange}
                value={formData.maritalStatus}
              >
                <option value="">Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option Value="Divorced">Divorced</option>
                <option Value="Separated">Separated</option>
              </select>
              <label htmlFor="Gender">
                <input
                  type="text"
                  placeholder="Gender"
                  className="placeholder"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="b-data2">
              <label htmlFor="phone_number">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="placeholder"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="age">
                <input
                  type="number"
                  placeholder="Age"
                  className="placeholder"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </label>

              <label htmlFor="national-id">
                <input
                  type="number"
                  placeholder="National Identity Number"
                  className="placeholder"
                  name="nationalIdentityNumber"
                  value={formData.nationalIdentityNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="income">
                <input
                  type="number"
                  placeholder="Income per month"
                  className="placeholder"
                  name="incomePerMonth"
                  value={formData.incomePerMonth}
                  onChange={handleInputChange}
                />
              </label>
              <select
                name="jobSector"
                onChange={handleInputChange}
                value={formData.jobSector}
              >
                <option value="">Job Sector</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Accounting and Finance">
                  Accounting and Finance
                </option>
                <option Value=" Sales and Customer Service">
                  Sales and Customer Service
                </option>
                <option Value="Engineering">Engineering</option>
                <option Value="Operations and Logistics">
                  Operations and Logistics
                </option>
                <option Value="Information Technology">
                  Information Technology
                </option>
                <option Value="Education and Training">
                  Education and Training
                </option>
                <option Value="Others">Others</option>
              </select>

              <label htmlFor="jobRole">
                <input
                  type="text"
                  placeholder="Job Role"
                  className="placeholder"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="car-dot">
            <p className="p1">
              <RxDotFilled size="25px"/>
            </p>
              {" "}
              <p>
                <RxDotFilled size="25px"/>
              </p>
            <p>
              <RxDotFilled size="25px"/>
            </p>
            <p>
              <RxDotFilled size="25px"/>
            </p>
          </div>
      
      </div>
     
    </div>
  );
};

export default Borrow;