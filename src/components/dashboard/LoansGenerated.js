import React, {useState, useEffect} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import "../../styles/dashPages.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const LoansGenerated = () => {
  const [successful, setSuccessful] = useState();
  const getToken = localStorage.getItem("token");

  const getSuccessData = async () => {
    const gethead = new Headers();
    gethead.append("Authorization", `Bearer ${getToken}`);
    const res = await fetch(
      "https://nodebtdev.onrender.com/api/loans/success-loans/ascending",
      {
        method: "GET",
        headers: gethead,
      }
    );
    return res.json();
  };
  const { data } = useQuery("declinedAscend", getSuccessData);
  useEffect(() => {
    setSuccessful(data);
  }, [data]);
  return (
    <>
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
          <h3>Loans Generated</h3>
        </div>
        <div className="generatedboard-wrap">
          <h4>Loans Generated</h4>
          <div className="loans-heading">
            <div>
              <p className="generated-blue">Total Amount: 4,587,541.28</p>
              <h6>Last Month</h6>
            </div>
            <div className="sort-div">
              {" "}
              <p>
                Sort by month
                <span>
                  <RiArrowDownSLine />
                  Month
                </span>
              </p>
            </div>
          </div>
          <table className="loans-table">
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
            {successful?.data?.loans.length === 0 ? successful.message :
             successful?.data?.loans.map((all) => {
              return (
                <tr key={all._id}>
                  <td>{all.fullname}</td>
                  <td>{all.createdAt}</td>
                  <td className="generated-blue">Successful</td>
                  <td>{all.creditScore}</td>
                  <td>{all.loanAmount}</td>
                </tr>
              );
            })
             }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LoansGenerated;
