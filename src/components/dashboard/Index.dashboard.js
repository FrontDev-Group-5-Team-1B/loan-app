
import React from 'react'
import { CiWallet } from 'react-icons/ci'
import {BiRectangle} from 'react-icons/bi'
import BorrowerLoanInfo from './BorrowerLoanInfo'
import { Link } from 'react-router-dom'
import DashBoardContainer from '../layouts/DashBoardContainer'


const loanData = [
  { id: "1", fig: "4,587,541.", name: "Loans generated" },
  { id: "2", fig: "824,458.", name: "Loans refunded" },
  { id: "3", fig: "21,500.", name: "Loans declined" },
  { id: "4", fig: "42,542.", name: "Pending loans" },
];

const Dashboard = () => {




  const dataList = loanData.map((loanFig, index) =>
  
   <li key={loanFig.id}>
     <div className='dContainer'>
     <div className='dCards'>
      <div className='fig-flex'>
        <div className='map-rect'>
        <p className='fig-map'>{loanFig.name}</p>
        <h4>{loanFig.fig}<span>28</span></h4>
        </div>
        <div className='dash-wallet'><CiWallet/></div>
      </div>
      <div className='percent-flex'>
        <div className='percent-rect'>
       <p className='rect-color'><BiRectangle/></p><p>2.15%</p><p>Last month</p>
        </div>
        <div className='dash-view'><p>View more</p></div>
      </div>

    </div>
    </div>
    </li>
  
  );

  return (
<div className='main-wrap'>
    <div>
  <div className='dHead'>
  <h2>Dashboard</h2>
  <h3>Analysis</h3>
  </div>
   <ul>{dataList}</ul>
   </div>
<div className='dash-chart'>
  <p>Loan Monthly Frequency</p>
</div>
   
      </div>

  );
};

export default Dashboard;
