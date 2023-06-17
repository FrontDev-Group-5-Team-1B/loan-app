import React from 'react'
import { Link } from 'react-router-dom'
import {RxDotFilled} from 'react-icons/rx'

const BorrowerLoanInfo = ({loanType, repaymentType,loanAmount, purposeOfLoan, handleChange, page}) => {

  return (

    <div style={page === 2 || page === 'open' ? {display: 'block'} : {display: 'none'}} className='borrow-wrap'>
     <div className='b-header'>
      <h3>Input Borrower's Data</h3>
      <p>Carefully input the borrower's details</p>
   </div>
    <div className='bor-data'>
      <h5>
        Loan Information
        </h5>
        
        <div className='loan-info-flex'>

        <div>
            <select name='loanType' value={loanType} onChange={handleChange}>
                <option>Loan Type</option>
                <option>Business Loan</option>
                <option>Student Loan</option>
                <option>Agricultural Loan</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select>

            <input type='number' name='loanAmount' value={loanAmount} onChange={handleChange} placeholder='Loan Amount' className='placeholder' />

            {/* <input type='text' name='' placeholder='Upload Credit report' className='placeholder' /> */}

        </div>

        <div>
            <select name='repaymentType' value={repaymentType} onChange={handleChange}>
                <option>Repayment Type</option>
                <option>Interest Only</option>
                <option>Principal & Interest</option>
                <option>Capitaalized Interest</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select> 

        </div>
        </div>
        <textarea type='text' name='purposeOfLoan' value={purposeOfLoan} onChange={handleChange} placeholder='Purpose of Loan' />
      <div className='car-dot'>
        <p><RxDotFilled size="25px" /></p>
        <p className='p1'><RxDotFilled size="25px" /></p>
      {/* <Link to='/dashboard/collateral_info' style={{ textDecoration: "none"}}>  </Link> */}
      <p><RxDotFilled size="25px" /></p>
        <p><RxDotFilled size="25px" /></p>
      </div>
     
        
       
    </div>
     {/* <div className='d-btn'>
     <button className='l-btn'><Link to='/dashboard/borrow' style={{ textDecoration: "none", color: "blue" }}>Previous</Link></button>
     <button className='b-btn'><Link to='/dashboard/collateral_info' style={{ textDecoration: "none", color: "white" }}>Next</Link> </button>

 </div> */}
 </div>

  )
}

export default BorrowerLoanInfo