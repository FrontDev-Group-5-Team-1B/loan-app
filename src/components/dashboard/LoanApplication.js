import React, { useState } from "react";
import loanApplication from "../../data/loanApplication";
import { FiMenu } from "react-icons/fi";
import "../../styles/loanApplication.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const LoanApplication = () => {
  const [loanData, setLoanData] = useState();

  //  LOGIC FOR FETCHING ALL LOANS STARTS HERE //////////////
  const fetchCompanyLoans = async () => {
    try {
      const response = await axios.get(
        "https://nodebtdev.onrender.com/api/loans/company-loans",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data.data.loans;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    "companyLoans",
    fetchCompanyLoans
  );

  console.log(data);
  //  LOGIC FOR FETCHING ALL LOANS STARTS HERE //////////////

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
          {data?.map((application, idx) => (
            <tr key={idx}>
              <td>
                <Link to={"/dashboard/borrowerprofile"}>
                  {application.fullname}
                </Link>
              </td>
              <td>
                <Link to={"/dashboard/preview"}>{application.createdAt}</Link>
              </td>
              <td
                className="status"
                style={
                  application.eligibility === true
                    ? { color: "green" }
                    : application.eligibility === false
                    ? { color: "red" }
                    : { color: "red" }
                }
              >
                <Link to={"/dashboard/preview"}>
                  {application.eligibility === true ? (
                    <p>Successful</p>
                  ) : (
                    <p>Declined</p>
                  )}
                </Link>
              </td>
              <td>
                <Link to={"/dashboard/preview"}>{application.creditScore}</Link>
              </td>
              <td>
                <Link to={"/dashboard/preview"}>{application.loanAmount}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanApplication;
