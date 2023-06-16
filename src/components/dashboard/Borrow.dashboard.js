import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { RxDotFilled } from "react-icons/rx";
import useBorrowersDataStore from "../../store/borowersDataStore";

const Borrow = () => {
  const { formData, setFormData } = useBorrowersDataStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div className="borrow-wrap dash-wrapper">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Personal and contact information</h5>
        <form onSubmit={handleSubmit}>
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
                  placeholder="Email"
                  className="placeholder"
                  name="email"
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
              <label htmlFor="employment">
                <input
                  type="text"
                  placeholder="Employment"
                  className="placeholder"
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="b-data2">
              <label htmlFor="phone_number">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="placeholder"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label htmlFor="date-of-birth">
                <input
                  type="number"
                  placeholder="Date of Birth"
                  className="placeholder"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
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
