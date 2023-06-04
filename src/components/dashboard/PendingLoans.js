import React from 'react'
import PendingLoanData from '../../data/PendingLoanData';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {RiArrowDownSLine} from 'react-icons/ri';
import  '../../styles/dashPages.css';
import { Link } from 'react-router-dom';

const PendingLoans = () => {
  return (
    <>
    <div className='loansgener-wrapper'>
        <div className='generated-flex'>
        <Link to='/dashboard' style={{textDecoration: 'none', color: '#808080'}} ><p>Dashboard</p></Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
            <h3>Loans Pending</h3>
        </div>
        <div className='generatedboard-wrap'>
        <h4>Loans Pending</h4>
        <div className='loans-heading'>
            <div>
            <p  className='generated-orange'>Total Amount:  842,458.25</p>
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
            {PendingLoanData?.map((pendingData, index) => (
                <tr key={index}>
                <td>{pendingData.borrower_name}</td>
                <td>{pendingData.date}</td>
                <td className='generated-orange'>{pendingData.status}</td>
                <td>{pendingData.credit_score}</td>
                <td>{pendingData.amount}</td>
              </tr>
            ))}

        </tbody>

        </table>

        </div>
        




    </div>
    </>
  )
}

export default PendingLoans