import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


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
                   <h2>Borrowers Data Preview</h2>  </div>
                   <div className='p-fbp'>
                   <p className='fbp-header2'>Personal and contact information</p>
                   <div className='fbp-flex'>
                    <div>
                   <div>
                     <input type='text' placeholder='Mrs Tumise Anudolapo' className='placeholder' /></div>
                  <div>
                    <input type='email' 
                     placeholder='anu@yahoo.com'  className='placeholder' />
                    </div>
                   <div><input type='text' 
                     placeholder='45 cresent Ikeja'  className='placeholder' /></div>
                   <div> 
                  <input type='text' 
                   placeholder='Unemployed'  className='placeholder' /></div>
                   </div>
                <div>
                     <div>
                 <input type='text' placeholder='+2346587512520' className='placeholder' /></div>
                 <div>
                  <input type='number' 
                  placeholder='13th August 1986'  className='placeholder' />
                 </div>
                 <div><input type='text' 
                 placeholder='********'  className='placeholder' /></div>
                  <div> 
                  <input type='text' 
                 placeholder='10,000'  className='placeholder' /></div>
                  </div>
                   </div>
                   </div>
                   </div>
                  
                   <div className='l-fbp'>
                    <p  className='fbp-header2'>Loan Information</p>
                   <div className='fbp-flex'>
                    <div>
                   <div> <input type='text'placeholder='Student Loan' className='placeholder'/></div>
                   <div> <input type='text' placeholder='Upload Credit report' className='placeholder'/></div>
                    </div>
                    <div>
                   <div> <input type='text' placeholder='Repayment Term' className='placeholder' /></div>
                    <div><input type='text' placeholder='Upload credit score' className='placeholder'/></div>
                    </div>
               </div>
               <textarea className='fbp-text'>Purpose of loan</textarea>
               </div>

               <div className='c-fbp'>
                  <p  className='fbp-header2'>Collateral Information</p>
                    <div className='fbp-flex'>
                  <div> <input type='text' placeholder='Collateral Value' className='placeholder' /></div>
                  <div> <input type='text' placeholder='Type of Asset' className='placeholder' /></div>
                    </div>
                   <textarea className='fbp-text'>Provide collateral information e.g location, car model, mileage e.t.c</textarea></div>

                   <div className='g-fbp'>
                   <p  className='fbp-header2'>Guarantor's Information</p>
                   <div className='fbp-flex'>
                    <div>
                    <div>
                   <input type='text' placeholder='Name' className='placeholder' /></div>
                   <div>
                   <input type='email' placeholder='Email' className='placeholder' /></div>
                   <div>
                   <input type='text' placeholder='Address' className='placeholder' /></div>
                   <div>
                    <input type='text' placeholder='relationship' className='placeholder' /></div>
                    <div>
                    <input type='text' placeholder='Other sources of income' className='placeholder' /></div>
                    </div>
                
                    <div>
                    <div>
                   <input type='number' placeholder='Phone Number' className='placeholder' /></div>
                   <div>
                   <input type='number' placeholder='Date of Birth' className='placeholder' /></div>
                   <div>
                   <input type='text' placeholder='Social Security Number' className='placeholder' /></div>
                   <div>
                    <input type='text' placeholder='Employment' className='placeholder' /></div>
                    <div>
                    <input type='text' placeholder='Income per month' className='placeholder' /></div>
                    
                    </div>
                 </div>
                   </div>

                   <div className='fbp-grade'>
                    <p><i>After carefully previewing the borrower's data form, go ahead to upload and check loan eligibilty to predict loan default</i></p>
                    </div>
                    <div className='fbp-admin'>
                      <p>Admin in charge </p>
                      <div>
                    <input type='text' placeholder='Input Name' className='placeholder' /></div>

                    </div>


                   <div>
                  <div className='f-btn-div'><button type='submit' onClick={() => setModalisopen(true)} className='f-btn'>Upload Data</button></div>
                    <Modal isOpen={ModalIsopen} onRequestClose={() => setModalisopen(false)}  style={customStyles}>

                       <div className='bs-preview'>
                      <h6>Borower's data has been Uploaded successfully!</h6>
                      <Link to='/dashboard/eligibilitystatus'><button>Check Eligibility Status</button></Link>
                      
                    </div>

                    </Modal>  
                    </div>
                  


    </div>
  )
}

export default FullBProfile