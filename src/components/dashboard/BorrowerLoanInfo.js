import React from 'react'

const BorrowerLoanInfo = () => {

  return (
    <>
    <div  className='bor-data'>
        <h5>
        Loan Information
        </h5>
        <form>
        <div className='loan-info-flex'>
        <div>
            <select>
                <option>Loan Type</option>
                <option>Business Loan</option>
                <option>Student Loan</option>
                <option>Agricultural Loan</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select>
            <input type='text' placeholder='Upload Credit report' className='placeholder' />
        </div>
        <div>
            <select>
                <option>Repayment Type</option>
                <option>Interest Only</option>
                <option>Principal & Interest</option>
                <option>Capitaalized Interest</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select>
            <input type='text' placeholder='Upload Credit score' className='placeholder' />

        </div>
        </div>
        <textarea type='text' placeholder='Purpose of Loan' />
        </form>
       
    </div>
     <div className='d-btn'>
     <button className='l-btn'>Previous</button>
     <button className='b-btn'>Next</button>

 </div>
 </>
  )
}

export default BorrowerLoanInfo