import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowRight} from 'react-icons/md'
import Modal from '../Modal'



const EligibilityStatus = () => {
  const [showModal, setShowModal] = useState(false);
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
    <div>
          <div className='generated-flex'>
        <Link to='/dashboard/borrow' style={{textDecoration: 'none', color: '#808080'}} >Input Borrower's data</Link>
           <p className='arrowimg'> <MdKeyboardArrowRight/></p>
           <Link to='/dashboard/fullbprofile' style={{textDecoration: 'none', color: '#808080'}}>Borrower's data preview</Link>
           <p  className='arrowimg'><MdKeyboardArrowRight/></p>
           <h5>Loan Eligibility Status</h5>
        </div>
        <div className='b-header'>
            <h2>Borrower's Loan Eligibilty Status</h2>
            <p className='b-head1'><i>This borrower is not eligible to loan type</i></p>
            <p className='b-head1'><i>After thorough analysis by the system, it has been predicted that this borrower is likely to default loan. It is hereby advised to reject the loan application of this borrower</i></p>
            <p className='b-head1'><span>Reason:</span><i>This borrower has inefficient income and there is a fault in collateral data</i></p>
            <p className='b-head1'><span>Financial advice:</span><i>Application for a lower amount of loan is advised, possible amount is between the sum of $40 - 50$</i></p>
        </div>
        <div className='can-btn'>
            <button type='submit' onClick={() => setShowModal(true)} className='f-btn'>Cancel Loan Generation</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <p>Loan Generation Process has been canceled</p>
              <Link to='/dashboard'>Back</Link>
            </Modal>
        </div>
        <Link to='/dashboard/statussender'style={{textDecoration: 'none', color: '#808080'}}><p className='status-bor'>Send Eligibility Status to Borrower</p></Link>
    </div>
  )
}

export default EligibilityStatus