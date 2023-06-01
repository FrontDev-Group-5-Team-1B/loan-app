import React from 'react'
import loanApplication from '../../data/loanApplication';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {RiArrowDownSLine} from 'react-icons/ri';
import  '../../styles/dashPages.css'

const LoansRefunded = () => {
  return (
<>
    <div className='loansgener-wrapper'>
        <div className='generated-flex'>
            <p>Dashboard</p>
            <MdKeyboardArrowRight/>
            <h3>Loans Refunded</h3>
        </div>
        <div className='generatedboard-wrap'>
        <h4>Loans Refunded</h4>
        <div className='loans-heading'>
        <div>
            <p>Total Amount: 4,587,541.28</p>
            <h6>Last Month</h6>
            </div>
           <div> <p>Sort by month<span><RiArrowDownSLine/>Month</span></p></div>
        </div>
        <table className='loans-table'>
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
                <td className='generated-green'>{application.status}</td>
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

export default LoansRefunded