import React from "react";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";

import useBorrowersDataStore from "../../store/borowersDataStore";

const DashCollaInfo = () => {
  const { formData, setFormData } = useBorrowersDataStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "collateralValue" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };
  return (
    <div className="borrow-wrap">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Collateral Information</h5>
        <form>
          <div className="loan-info-flex">
            <div>
              <select
                name="collateralType"
                onChange={handleInputChange}
                value={formData.collateralType}
              >
                <option value="">Collateral Type</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Business Equipment">Business Equipment</option>
                <option value="Inventory">Inventory</option>
                <option value="Invoices"> Invoices</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="Collateral Value"
                className="placeholder"
                name="collateralValue"
                value={formData.collateralValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <textarea
            type="text"
            placeholder="Provide Collateral information e.g location, car model, mileage e.t.c"
            name="collateralInformation"
            value={formData.collateralInformation}
            onChange={handleInputChange}
          />
          <div className="car-dot">
            <p>
              <RxDotFilled size="25px" />
            </p>
            <Link to="/dashboard/borrow" style={{ textDecoration: "none" }}>
              {" "}
              <p>
                <RxDotFilled size="25px" />
              </p>
            </Link>
            <p className="p1">
              <RxDotFilled size="25px" />
            </p>
            <Link
              to="/dashboard/guarantor_info"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <p>
                <RxDotFilled size="25px" />
              </p>
            </Link>
          </div>
        </form>
      </div>
      <div className="d-btn">
        <button className="l-btn">
          <Link
            to="/dashboard/borrowerloan_info"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Previous
          </Link>
        </button>
        <button className="b-btn">
          <Link
            to="/dashboard/guarantor_info"
            style={{ textDecoration: "none", color: "white" }}
          >
            Next
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default DashCollaInfo;
