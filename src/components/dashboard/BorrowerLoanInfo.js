import React from 'react'
import { Link } from 'react-router-dom'
import {RxDotFilled} from 'react-icons/rx'

const BorrowerLoanInfo = () => {

  return (

    <div className='borrow-wrap'>
     <div className='b-header'>
      <h3>Input Borrower's Data</h3>
      <p>Carefully input the borrower's details</p>
   </div>
    <div  className='loan-data'>
      <h5>
        Loan Information
        </h5>
        <form>
        <div className='loan-info-flex'>

        <div>
            <select>
                <option>Loan Type</option>
                <option>Business Loan</option>
                <option>Student Loan</option>
                <option>Agricultural Loan</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select>

            <input type='text' placeholder='Upload Credit report' className='placeholder' />

        </div>
        <div>
            <select>
                <option>Repayment Type</option>
                <option>Interest Only</option>
                <option>Principal & Interest</option>
                <option>Capitaalized Interest</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select>
    
            <input type='text' placeholder='Upload Credit score' className='placeholder' />

        </div>
        </div>
        <textarea type='text' placeholder='Purpose of Loan' />
      <div className='car-dot'>
        <p><RxDotFilled/></p>
        <p className='p1'><RxDotFilled/></p>
      <Link to='/dashboard/collateral_info' style={{ textDecoration: "none"}}>  <p><RxDotFilled/></p></Link>
        <p><RxDotFilled/></p>
      </div>
     
        </form>
       
    </div>
     <div className='d-btn'>
     <button className='l-btn'><Link to='/dashboard/borrow' style={{ textDecoration: "none", color: "blue" }}>Previous</Link></button>
     <button className='b-btn'><Link to='/dashboard/collateral_info' style={{ textDecoration: "none", color: "white" }}>Next</Link> </button>

 </div>
 </div>

  )
}

export default BorrowerLoanInfo