import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


const FullBProfile = () => {
  return (
    <div>
        <div>
         <div>
         <div>
        <Link to='/dashboard' style={{textDecoration: 'none', color: '#808080'}} >Dashboard</Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
            <h3>Loans Declined</h3>
        </div>
                   <h2>Borrower's Saved Data</h2>
                   <p>Personal and contact information</p>
                   </div>
                   <div className='modal-flex'>
                    
                        <div>
                        <li>Miss Tumise Anikulapo</li>
                        <li>anut@gmail.com</li>
                        <li>45 Crescent Ikejs</li>
                        <li>Unemployed</li>
                        
                        </div>
                    
                        <div>
                        <li>+2348067532955</li>
                        <li>Date of Birth</li>
                        <li>13th August 1986</li>
                        <li>.......</li>
                        <li>10,000 Naira</li>
                        
                        </div>
                   
                   </div>
                   </div>
                   <div>
                   <div className='modal-flex'>
                    <div>
                    <li>Student Loan</li>
                    <li>Upload Credit report</li>
                    </div>
                    <div>
                    <li>Repayment Term</li>
                    <li>Upload credi score</li>
                    </div>
                    
               
               </div>
               <p>Purpose of loan</p>
                   </div>
                   <div>
                    <div>
                    <p>Type of Asset</p>
                    <p>Collateral Value</p>
                    </div>
                    <p>Provide collateral information e.g location, car model, mileage</p>

                   </div>
                   <div>
                   <div className='modal-flex'>
                    
                    <div>
                    <li>Name</li>
                    <li>Email</li>
                    <li>Address</li>
                    <li>Relationship</li>
                    <li>Other sources of income</li>
                    </div>
                
                    <div>
                    <li>Phone Number</li>
                    <li>Date of Birth</li>
                    <li>Social Security Number</li>
                    <li>Employment</li>
                    <li>Income per month</li>
                    
                    </div>
               
               </div>
                   </div>


    </div>
  )
}

export default FullBProfile