import React from 'react'
import { Link } from 'react-router-dom'
import {RxDotFilled} from 'react-icons/rx'

const DashCollaInfo = () => {
  return (
    <div className='borrow-wrap'>
     <div className='b-header'>
      <h3>Input Borrower's Data</h3>
      <p>Carefully input the borrower's details</p>
   </div>
    <div className='bor-data'>
      <h5>Collateral Information</h5>
      <form>
        <div className='loan-info-flex'>
        <div>
            <select>
                <option>Collateral Type</option>
                <option>Real Estate</option>
                <option>Business Equipment</option>
                <option>Inventory</option>
                <option>Invoices</option>
                <option>Cash</option>
            </select>
           
        </div>
        <div>
            
            <input type='text' placeholder='Collateral Value' className='placeholder' />

        </div>
        </div>
        <textarea type='text' placeholder='Provide Collateral information e.g location, car model, mileage e.t.c' />
        <div className='car-dot'>
          <p><RxDotFilled/></p>
         <Link to='/dashboard/borrow' style={{ textDecoration: "none"}}> <p><RxDotFilled/></p></Link>
          <p className='p1'><RxDotFilled/></p>
         <Link to='/dashboard/guarantor_info' style={{ textDecoration: "none"}}> <p><RxDotFilled/></p></Link>




        </div>
        </form>
       
    </div>
    <div className='d-btn'>
     <button className='l-btn'><Link to='/dashboard/borrowerloan_info' style={{ textDecoration: "none", color: "blue" }}>Previous</Link></button>
     <button className='b-btn'><Link to='/dashboard/guarantor_info' style={{ textDecoration: "none", color: "white" }}>Next</Link> </button>

 </div>
    </div>
        
  
  )
}

export default DashCollaInfo