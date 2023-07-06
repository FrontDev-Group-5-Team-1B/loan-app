import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import "../../styles/borrowersProfile.css";
import { useQuery } from "react-query";
import axios from "axios";

const BorrowerProfile = () => {
  // const [data, setData] = useState(null);

  const { fullname } = useParams();

  //  LOGIC FOR FETCHING ALL LOAN DETAILS STARTS HERE //////////////
  const fetchCompanyLoans = async () => {
    try {
      const response = await axios.get(
        `https://nodebtdev.onrender.com/api/loans?id=${localStorage.getItem(
          "id"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    "companyLoans",
    fetchCompanyLoans
  );

  console.log(data);

  return (
    <div className="loansgener-wrapper">
      <div className="generated-flex">
        <Link
          to="/dashboard"
          style={{ textDecoration: "none", color: "#808080" }}
        >
          <p>Dashboard</p>
        </Link>
        <p className="arrowimg">
          {" "}
          <MdKeyboardArrowRight />
        </p>
        <h3>Borrower's Profile</h3>
      </div>
      {isLoading && <p>Loading......</p>}

      {data &&
        data
          .filter(function (details) {
            return details.fullname === fullname;
          })
          .map((info) => {
            return (
              <div>
                <div className="bprofile-div">
                  <div>
                    <h4>{info.fullname}</h4>
                    <p>Date: {info.createdAt.split("T")[0]}</p>
                  </div>
                </div>

                <div className="bprofile-div2">
                  <div className="p-borrow1">
                    <p>Loan Amonunt:</p>
                    <p>{info.loanAmount}</p>
                  </div>
                  <div className="p-borrow1">
                    <p>Loan Status:</p>

                    {info.eligibility === true ? (
                      <p>Successful</p>
                    ) : (
                      <p>Declined</p>
                    )}
                  </div>
                  <div className="p-borrow1">
                    <p>Admin in Charge:</p>
                    <p>{info.fullname}</p>
                  </div>
                  <div>
                    <Link to="/dashboard/fullbprofile">
                      <button className="modal-btn">
                        View Borrower's Data
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default BorrowerProfile;
