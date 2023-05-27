import React from 'react'
import loanApplication from '../../data/loanApplication';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {RiArrowDownSLine} from 'react-icons/ri';

const LoansDeclined = () => {
  return (
    <>
    <div>
        <div>
            <p>Dashboard</p>
            <MdKeyboardArrowRight/>
            <h3>Loans Declined</h3>
        </div>
        <div>
        <div>
            <h4>Loans Declined</h4>
            <div>
            <p>Total Amount: 4,587,541.28</p>
            <p>Sort by month<RiArrowDownSLine/><span>Month</span></p>
            </div>
            <p>Last Month</p>
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
            {loanApplication?.map((application, index) => (
                <tr key={index}>
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
        

    </div>
    </>
  )
}

export default LoansDeclined