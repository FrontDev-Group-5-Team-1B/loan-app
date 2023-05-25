import React from 'react'

const Borrow = () => {


  return (
    <>
    <div>
      <h3>Input Borrower's Data</h3>
      <p>Carefully input the borrowers's details</p>
   </div>
   <form>
    <h5>Personal and contact information</h5>
    <div>
    <div>
      
      <div>
      
        <input type='text' placeholder='Name' /></div>
      <div>
        <input type='email' 
       placeholder='Email' />
      </div>
      <div><input type='text' 
      placeholder='Address' /></div>
     <div> 
      <input type='text' 
      placeholder='Employment' /></div>
    </div>
    <div>
     <div> 
      <input type='text' 
      placeholder='Phone Number' />
      </div>
     <div> 
      <input type='number' 
      placeholder='Date of Birth' />
      </div>
      <div>
        <input type='number'
         placeholder='National Identity Number' />
         </div>
      <input type='number' 
      placeholder='Income per month' />
    </div>
    </div>
   </form>
    </>
  )
}

export default Borrow;