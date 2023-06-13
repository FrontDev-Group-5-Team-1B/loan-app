import React, { useState } from "react";
import loanApplication from "../../data/loanApplication";
import { FiMenu } from "react-icons/fi";
import "../../styles/loanApplication.css";
import { Link } from "react-router-dom";

const LoanApplication = () => {
  const [loanData, setLoanData] = useState();
  return (
    <div className="db-loan-application-container dash-wrapper">
      <div className="loan-app-title">
        <h2>Loan Applications</h2>
        {/* <div className="loan-app-filter-icon">
          <FiMenu size="25px" />
          <h3>Filter</h3>
        </div> */}
      </div>

      <table className="loan-app-table">
        <thead>
          <tr>
            <th>Borrower's Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Credit Score</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {loanApplication?.map((application, idx) => (
            <tr key={idx}>
              <td>
                <Link to={"/dashboard/borrowerprofile"}>
                  {application.borrower_name}
                </Link>
              </td>
              <td>
                <Link to={"/dashboard/preview"}>{application.date}</Link>
              </td>
              <td
                className="status"
                style={
                  application.status === "Successful"
                    ? { color: "green" }
                    : application.status === "Pending"
                    ? { color: "orange" }
                    : { color: "red" }
                }
              >
                <Link to={"/dashboard/preview"}>{application.status}</Link>
              </td>
              <td>
                <Link to={"/dashboard/preview"}>
                  {application.credit_score}
                </Link>
              </td>
              <td>
                <Link to={"/dashboard/preview"}>{application.amount}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplication;
