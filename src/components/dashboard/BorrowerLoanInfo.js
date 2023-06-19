import React from "react";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import useBorrowersDataStore from "../../store/borowersDataStore";

const BorrowerLoanInfo = () => {
  const { formData, setFormData } = useBorrowersDataStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "loanAmount" ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };
  return (
    <div className="borrow-wrap">
      <div className="b-header">
        <h3>Input Borrower's Data</h3>
        <p>Carefully input the borrower's details</p>
      </div>
      <div className="bor-data">
        <h5>Loan Information</h5>
        <form>
          <div className="loan-info-flex">
            <div>
              <select
                name="loanType"
                onChange={handleInputChange}
                value={formData.loanType}
              >
                <option value="">Loan Type</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Student Loan">Student Loan</option>
                <option Value="Agricultural Loan">Agricultural Loan</option>
                <option Value="Housing Loan">Housing Loan</option>
                <option Value="Others">Others</option>
              </select>

              <input
                type="text"
                placeholder="Loan Amount"
                className="placeholder"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <select
                name="repaymentType"
                onChange={handleInputChange}
                value={formData.repaymentType}
              >
                <option value="">Repayment Type</option>
                <option value="Interest Only">Interest Only</option>
                <option value="Principal $ Interest">
                  Principal & Interest
                </option>
                <option value="Capitalized Interest">
                  Capitaalized Interest
                </option>
                <option value="Housing Loan">Housing Loan</option>
                <option value="Others">Others</option>
              </select>

              <input
                type="text"
                placeholder="Upload Credit score"
                className="placeholder"
              />
            </div>
          </div>

          <textarea
            type="text"
            placeholder="Purpose of Loan"
            name="purposeOfLoan"
            value={formData.purposeOfLoan}
            onChange={handleInputChange}
          />
          <div className="car-dot">
            <p>
              <RxDotFilled />
            </p>
            <p className="p1">
              <RxDotFilled />
            </p>
            <Link
              to="/dashboard/collateral_info"
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
          </div>
        </form>
      </div>
      <div className="d-btn">
        <button className="l-btn">
          <Link
            to="/dashboard/borrow"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Previous
          </Link>
        </button>
        <button className="b-btn">
          <Link
            to="/dashboard/collateral_info"
            style={{ textDecoration: "none", color: "white" }}
          >
            Next
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default BorrowerLoanInfo;
