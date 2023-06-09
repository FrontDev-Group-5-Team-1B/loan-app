import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaEnvelope } from 'react-icons/fa'
import google from "../../assets/logos_google-icon.png";



const StatusSender = () => {

  return (
    <div>
         <div className='generated-flex'>
        <Link to='/dashboard/borrow' style={{textDecoration: 'none', color: '#808080'}} >Input Borrower's data</Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
           <Link to='/dashboard/fullbprofile' style={{textDecoration: 'none', color: '#808080'}}>Borrower's data preview</Link>
           <p  className='arrowimg'><MdKeyboardArrowRight/></p>
           <Link to='/dashboard/eligibilitystatus' style={{textDecoration: 'none', color: '#808080'}}>Loan Eligibility Status</Link>
           <p  className='arrowimg'><MdKeyboardArrowRight/></p>
           <h5>Send Message</h5>
        </div>

        <div className='b-header'>
            <h2>Send Loan Eligibility Status To Borrower</h2>
            <p className='b-head1'><i>Choose to send the eligibility status and financial advice to borrower via email or text message</i></p>
        </div>
        <div className='m-btn'>
            <button className='mb-btn'>Send via Gmail <span> <FaEnvelope/></span></button>
            <button className='mb-btn'>Send via Text Message<span><img src={google} alt='google' style={{width: '12px'}} /></span></button>
        </div>


    </div>
  )
}

export default StatusSender