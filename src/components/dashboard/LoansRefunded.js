import React from 'react'
import RefundedLoanData from '../../data/RefundedLoanData';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {RiArrowDownSLine} from 'react-icons/ri';
import  '../../styles/dashPages.css'

const LoansRefunded = () => {
  return (
<>
    <div className='loansgener-wrapper'>
        <div className='generated-flex'>
            <p>Dashboard</p>
            <p className='arrowimg'><MdKeyboardArrowRight/></p>
            <h3>Loans Refunded</h3>
        </div>
        <div className='generatedboard-wrap'>
        <h4>Loans Refunded</h4>
        <div className='loans-heading'>
        <div>
            <p className='generated-green'>Total Amount:  842,458.25</p>
            <h6>Last Month</h6>
            </div>
           <div  className='sort-div'> <p>Sort by month<span><RiArrowDownSLine/>Month</span></p></div>
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
            {RefundedLoanData?.map((refundedData, index) => (
                <tr key={index}>
                <td>{refundedData.borrower_name}</td>
                <td>{refundedData.date}</td>
                <td className='generated-green'>{refundedData.status}</td>
                <td>{refundedData.credit_score}</td>
                <td>{refundedData.amount}</td>
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