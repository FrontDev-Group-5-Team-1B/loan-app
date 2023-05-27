import React from "react";
import { TfiVector } from "react-icons/tfi";
import { BiRectangle } from "react-icons/bi";
import BorrowerLoanInfo from "./BorrowerLoanInfo";

const loanData = [
  { id: "1", fig: "4,587,541.", name: "Loans generated" },
  { id: "2", fig: "824,458.", name: "Loans refunded" },
  { id: "3", fig: "21,500.", name: "Loans declined" },
  { id: "4", fig: "42,542.", name: "Pending loans" },
];

const Dashboard = () => {
  const dataList = loanData.map((loanFig, index) => (
    <div key={loanFig.id}>
      <div className="dContainer">
        <div className="dCards">
          <div className="fig-flex">
            <div className="map-rect">
              <p>{loanFig.name}</p>
              <h4>
                {loanFig.fig}
                <span>28</span>
              </h4>
            </div>
            <div>
              <TfiVector />
            </div>
          </div>
          <div className="percent-flex">
            <div>
              <p>
                <BiRectangle />
                2.15%<span>Last month</span>
              </p>
            </div>
            <div>View more</div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="main-db-container">
        <div className="dHead">
          <h2>Dashboard</h2>
          <h3>Analysis</h3>
        </div>
        <ul>{dataList}</ul>

        <div className="dash-chart">
          <p>Loan Monthly Frequency</p>
        </div>

        <BorrowerLoanInfo />
      </div>
    </>
  );
};

export default Dashboard;
