import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Modal from '../Modal';


const FullBProfile = () => {
  const [ModalIsopen, setModalisopen] = useState(false)
  

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '50px'
    },
  };


  return (
    
    <div className='borrow-wrap'>
        <div>
        
         <div className='generated-flex'>
        <Link to='/dashboard/borrow' style={{textDecoration: 'none', color: '#808080'}} >Input Borrower's data</Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
            <h3>Borrower's data preview</h3>
        </div >
        <div className='b-header'>
                   <h2>Borrowers Data Preview</h2>
                   <p className='fbp-header'>Personal and contact information</p>
                   </div>
                   </div>
                   <div className='p-fbp'>
                   <div className='fbp-flex'>
  
                        <div>
                        <li>Miss Tumise Anikulapo</li>
                        <li>anut@gmail.com</li>
                        <li>45 Crescent Ikejs</li>
                        <li>Unemployed</li>
                        </div>
                    
                        <div>
                        <li>+2348067532955</li>
                        <li>13th August 1986</li>
                        <li>.......</li>
                        <li>10,000 Naira</li>
                        
                        </div>
                   
                   </div>
                   </div>
                  
                   <div className='l-fbp'>
                    <p  className='fbp-header2'>Loan Information</p>
                   <div className='fbp-flex'>
                    <div>
                    <li>Student Loan</li>
                    <li>Upload Credit report</li>
                    </div>
                    <div>
                    <li>Repayment Term</li>
                    <li>Upload credit score</li>
                    </div>
               </div>
               <p className='fbp-text'>Purpose of loan</p>
               </div>

               <div className='c-fbp'>
                  <p  className='fbp-header2'>Collateral Information</p>
                    <div className='fbp-flex'>
                  <div><li>Type of Asset</li></div>
                  <div><li>Collateral Value</li></div>
                    </div>
                   <p className='fbp-text'>Provide collateral information e.g location, car model, mileage e.t.c</p></div>

                   <div className='g-fbp'>
                   <p  className='fbp-header2'>Guarantor's Information</p>
                   <div className='fbp-flex'>
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

                   <div className='fbp-grade'>
                    <p><i>After carefully previewing the borrower's data form, go ahead to upload and check loan eligibilty to predict loan default</i></p>
                    </div>


                   <div>
                    <button type='submit' onClick={() => setModalisopen(true)} className='f-btn'>Uplaod data</button>
                    <Modal isOpen={ModalIsopen} onRequestClose={() => setModalisopen(false)}  style={customStyles}>

                       <div className='bs-preview'>
                      <h6>Borower's data has been Uploaded successfully</h6>
                      <Link to='/dashboard/eligibilitystatus'><button>Check Eligibility Status</button></Link>
                      
                    </div>

                    </Modal>  
                    </div>
                  


    </div>
  )
}

export default FullBProfile