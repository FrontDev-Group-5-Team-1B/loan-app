import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'



const StatusSender = () => {

  return (
    <div>
         <div className='generated-flex'>
        <Link to='/dashboard/borrow' style={{textDecoration: 'none', color: '#808080'}} >Input Borrower's data</Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
           <Link to='/dashboard/fullbprofile' style={{textDecoration: 'none', color: '#808080'}}>Borrower's data preview</Link>
           <p  className='arrowimg'><MdKeyboardArrowRight/></p>
           <h5>Loan Eligibility Status</h5>
        </div>

        <div>
            <h4>Send Loan Eligibility Status To Borrower</h4>
            <p>Choose to send the eligibility status and financial advive to borrower via email or text message</p>
        </div>
        <div>
            <button>Send via Gmail <span></span></button>
            <button>Send via Text Message</button>
        </div>


    </div>
  )
}

export default StatusSender