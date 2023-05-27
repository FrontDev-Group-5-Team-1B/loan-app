import React from "react";
import historyData from "../../data/historyData";
import { FiMenu } from "react-icons/fi";

const History = () => {
  return (
    <div className="db-history-container">
      <div>
        <h2>History</h2>
        <div>
          <FiMenu /> Filter
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Interest Rate</th>
            <th>Borrower's Name</th>
            <th>Time of Refund</th>
            <th>Login Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {historyData?.map((history, idx) => (
            <tr key={idx}>
              <td>{history.date}</td>
              <td>{history.description}</td>
              <td>{history.interest_rate}</td>
              <td>{history.borrower_name}</td>
              <td>{history.time_of_refund}</td>
              <td>{history.loan_type}</td>
              <td>{history.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
