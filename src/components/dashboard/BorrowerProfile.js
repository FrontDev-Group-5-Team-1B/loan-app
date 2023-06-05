import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import "../../styles/borrowersProfile.css"
import Modal from 'react-modal';



Modal.setAppElement('#root');
const BorrowerProfile = () => {
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
    <div  className='loansgener-wrapper'>
         <div className='generated-flex'>
            <Link to='/dashboard' style={{textDecoration: 'none', color: '#808080'}} ><p>Dashboard</p></Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
            <h3>Borrower's Profile</h3>
        </div>
        <div>
            <div className='bprofile-div'>
                <div>
                <h4>Blessing Effiong</h4>
                <p>Date: 15/02/23</p>
                </div>
                
            </div>

            <div className='bprofile-div2'>
                <div className='p-borrow1'>
                    <p>Loan Amonunt:</p>
                     <p>#5,000,000</p>
                </div>
                <div  className='p-borrow1'>
                    <p>Loan Status:</p>
                    <p>Successful</p>
                </div>
                <div className='p-borrow1'>
                    <p>Admin in Charge:</p>
                    <p>Mabel Okeke</p>
                </div>
                <div>
                <button onClick={() => setModalisopen(true)} className='borrow_preview'>View Borrower's Data</button>
                
                <Modal isOpen={ModalIsopen} onRequestClose={() => setModalisopen(false)}  style={customStyles} >
                <div className='modalP-head'>
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
                   <div className='modal-btn-div'>
                  <Link to='/dashboard/borrow'> <button onClick={() => setModalisopen(false)} className='modal-btn'>Next</button></Link>
                   </div>

                </Modal>

                </div>
                <div>
                
                <Modal isOpen={ModalIsopen} onRequestClose={() => setModalisopen(false)}  style={customStyles} >

                    <div className='modalP-head'>
                   <h2>Borrower's Saved Data</h2>
                   <p>Guarantor's Information</p>
                   </div>
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
                   <div className='modal-btn-div'>
                  <Link to='/dashboard/borrow'> <button onClick={() => setModalisopen(false)} className='modal-btn'>Next</button></Link>
                   </div>
                   </Modal>
                </div>
            </div>

        </div>

    </div>

  )
}

export default BorrowerProfile