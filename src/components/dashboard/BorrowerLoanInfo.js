import React from 'react'

const BorrowerLoanInfo = () => {

  return (
    <div>
        Loan Information
        <div>

        <div>
            <select>
                <option>Loan Type</option>
                <option>Business Loan</option>
                <option>Student Loan</option>
                <option>Agricultural Loan</option>
                <option>Housing Loan</option>
                <option>Others</option>
            </select>
            <input type='text' placeholder='Upload Credit report' />
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
            <input type='text' placeholder='Upload Credit score' />

        </div>
        </div>
        <textarea type='text' placeholder='Purpose of Loan'/>

    </div>
  )
}

export default BorrowerLoanInfo