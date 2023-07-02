import React, { useState, useEffect } from "react";
import loanApplication from "../../data/loanApplication";
import { FiMenu } from "react-icons/fi";
import "../../styles/loanApplication.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { FadeLoader } from "react-spinners";

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
  //  LOGIC FOR FETCHING ALL LOANS ENDS HERE //////////////

  //PAGINATION LOGIC STARTS HERE /////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const [records, setRecords] = useState([]);
  const [nPage, setNPage] = useState(1);
  const numPage = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    if (data) {
      setRecords(data.slice(firstIndex, lastIndex));
      setNPage(Math.ceil(data.length / recordsPerPage));
    }
  }, [data, firstIndex, lastIndex]);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  //PAGINATION LOGIC ENDS HERE / /////////////////

  return (
    <div className="db-loan-application-container dash-wrapper">
      <div className="loan-app-title">
        <h2>Loan Applications</h2>
        {/* <div className="loan-app-filter-icon">
          <FiMenu size="25px" />
          <h3>Filter</h3>
        </div> */}
      </div>
      {isLoading ? (
        <div className="spinner-container centered-spinner">
          <FadeLoader
            color="blue"
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <p>
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
              {records?.map((application, idx) => (
                <tr key={idx}>
                  <td>
                    <Link
                      to={`/dashboard/borrowerprofile/${application.fullname}`}
                    >
                      {application.fullname}
                    </Link>
                  </td>
                  <td>
                    <Link to={"/dashboard/preview"}>
                      {application.createdAt.split("T")[0]}
                    </Link>
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
                    <Link to={"/dashboard/preview"}>
                      {application.creditScore}
                    </Link>
                  </td>
                  <td>
                    <Link to={"/dashboard/preview"}>
                      {application.loanAmount}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </p>
      )}

      <div class="pagination">
        <button class="pagination-button previous" onClick={prevPage}>
          Previous
        </button>
        {numPage.map((n, i) => (
          <button
            className={`pagination-button ${currentPage === n ? "active" : ""}`}
            key={i}
            onClick={() => changeCurrentPage(n)}
          >
            {n}
          </button>
        ))}
        <button class="pagination-button next" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LoanApplication;
