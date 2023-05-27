import React from 'react'

const DashCollaInfo = () => {
  return (
    <>
    <div className='bor-data'>
      <h5>Collateral Information</h5>
      <form>
        <div className='loan-info-flex'>
        <div>
            <select>
                <option>Collateral Type</option>
                <option>Real Estate</option>
                <option>Business Equipment</option>
                <option>Inventory</option>
                <option>Invoices</option>
                <option>Cash</option>
            </select>
           
        </div>
        <div>
            
            <input type='text' placeholder='Collateral Value' className='placeholder' />

        </div>
        </div>
        <textarea type='text' placeholder='Provide Collateral information e.g location, car model, mileage e.t.c' />
        </form>
       
    </div>
    <div className='d-btn'>
     <button className='l-btn'>Previous</button>
     <button className='b-btn'>Next</button>

 </div>
    </>
        
  
  )
}

export default DashCollaInfo