import React from 'react'

const DashGInfo = () => {
  return (
    <div>
     <div>
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
    </form>
    
    </div>
    <div className='d-btn'>
     <button className='l-btn'>Previous</button>
     <button className='b-btn'>Next</button>

 </div>
   
    </div>

    </div>
  )
}

export default DashGInfo