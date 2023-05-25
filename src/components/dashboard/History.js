import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FiMenu} from "react-icons/fi"

const History = () => {
    const [historyData, setHistoryData] = useState([]);


    useEffect(() => {
      const fectchHistoryData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/history`);
            setHistoryData(response.data.results);
            // console.log(response.data)
        } catch (error) {

        }
      }
      return () => {
        fectchHistoryData();
      }
    }, []);
    

  return (
    <div>
      <div><h2>History</h2>
      <div><FiMenu /> Filter</div>
      </div>  

    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Interest Rate</th>
          <th>Borrower's Name</th>
          <th>Time of Refund</th>
          <th>Login Type</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
          {historyData.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              {/* <td>{item.description}</td>
              <td>{item.interest_rate}</td>
              <td>{item.borrower_name}</td>
              <td>{item.time_of_refund}</td>
              <td>{item.login_type}</td>
              <td>{item.amount}</td> */}
            </tr>    
          ))}
        </tbody>
        </table>
        </div>
  )
}

export default History;