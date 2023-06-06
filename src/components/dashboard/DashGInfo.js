import React from 'react';
import {RxDotFilled} from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';

const DashGInfo = () => {
  const [ModalIsopen, setModalisopen] = useState(false);
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
     <div className='b-header'>
      <h3>Input Borrower's Data</h3>
      <p>Carefully input the borrower's details</p>
     </div>
     <div className='bor-data'>
    <h5>Guarantor's Information</h5>
    <form>
      <div className='b-data'>
    <div className='b-data1'>
      <div>
     <input type='text' placeholder='name' className='placeholder' /></div>
      <div>
        <input type='email' 
       placeholder='Email'  className='placeholder' />
      </div>
      <div><input type='text' 
      placeholder='Address'  className='placeholder' /></div>
     <div> 
      <input type='text' 
      placeholder='Relationship'  className='placeholder' /></div>
       <div> 
      <input type='text' 
      placeholder='Other sources of Income'  className='placeholder' /></div>
 </div>
 <div className='b-data2'>
     <div> 
      <input type='number' 
      placeholder='Phone Number'  className='placeholder' />
      </div>
     <div> 
      <input type='number' 
      placeholder='Date of Birth'  className='placeholder' />
      </div>
      <div>
        <input type='number'
         placeholder='Social Security Number'  className='placeholder' />
         </div>
         <div>
      <input type='number' 
      placeholder='Employment'  className='placeholder' />
      </div>
      <div> 
      <input type='text' 
      placeholder='Income per month'  className='placeholder' /></div>
    </div>
    </div>
    <div className='car-dot'>
      <p><RxDotFilled/></p>
      <p><RxDotFilled/></p>
      <Link to='/dashboard/collateral_info' style={{ textDecoration: "none" }}><p><RxDotFilled/></p></Link>
      <p className='p1'><RxDotFilled/></p>
    </div>
    </form>
    
    </div>
    <div className='d-btn'>
     <button className='l-btn'><Link to='/dashboard/collateral_info' style={{ textDecoration: "none", color: "blue" }}>Previous</Link></button>

     <button type='submit'onClick={() => setModalisopen(true)} className='g-btn'>Save Data</button>
     <Modal isOpen={ModalIsopen} onRequestClose={() => setModalisopen(false)}  style={customStyles}>
      
      <div className='bs-preview'>
        <h6>Borower's data has been saved. Kindly preview data</h6>
        <button>Preview</button>
        <p>Cancel</p>
      </div>

     </Modal>

 </div>
   
    </div>

    
  )
}

export default DashGInfo