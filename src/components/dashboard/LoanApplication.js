import React, {useState, useEffect} from 'react'
import axios from "axios"
import {FiMenu} from "react-icons/fi"

const LoanApplication = () => {
    const [loanApplication, setLoanApplication] = useState([])

    useEffect(() => {
        const fectchLoanApplications = async () => {
          try {
              const response = await axios.get(`http://localhost:8000/loan_application`);
              setLoanApplication(response.data);
          } catch (error) {
  
          }
        }
        return () => {
          fectchLoanApplications();
        }
      }, []);
    
  return (
    <div>
        <div><h2>Loan Applications</h2>
      <div><FiMenu /> Filter</div>
      </div>
          <table>
        <thead>
          <tr>
            <th>Borrower's Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Credit Score</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {loanApplication.map((application) => (
            <tr key={application.id}>
              <td>{application.borrower_name}</td>
              <td>{application.date}</td>
              <td>{application.status}</td>
              <td>{application.credit_score}</td>
              <td>{application.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LoanApplication