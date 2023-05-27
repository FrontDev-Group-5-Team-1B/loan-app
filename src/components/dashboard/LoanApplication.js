import React from 'react'
import loanApplication from '../../data/loanApplication'
import {FiMenu} from "react-icons/fi"

const LoanApplication = () => {
 
  return (
    <div className='db-loan-application-container'>
        <div><h2>Loan Applications</h2>
      <div><FiMenu /> Filter</div>
      </div>
          <table>
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
              <td>{application.borrower_name}</td>
              <td>{application.date}</td>
              <td>{application.status}</td>
              <td>{application.credit_score}</td>
              <td>{application.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LoanApplication