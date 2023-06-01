
import React from 'react'
import { CiWallet } from 'react-icons/ci'
import {BsSquare} from 'react-icons/bs'
import BorrowerLoanInfo from './BorrowerLoanInfo'
import { Link } from 'react-router-dom'
import DashBoardContainer from '../layouts/DashBoardContainer'


const loanData = [
  { id: "1", fig: "4,587,541.", name: "Loans generated", href: 'loansgenerated'},
  { id: "2", fig: "824,458.", name: "Loans refunded", href: 'loansrefunded' },
  { id: "3", fig: "21,500.", name: "Loans declined", href: 'loansdeclined' },
  { id: "4", fig: "42,542.", name: "Pending loans", href: 'pendingloans' }
];

const Dashboard = () => {
  const colors = ['#0267FF', '#04AB33', '#FF2727', '#F29509'];

  const dataList = loanData.map((loanFig, index) => {
    const color = colors[index % colors.length];
    const colorClass = `color-${index}`;

  return (
   <li key={loanFig.id}>
     <div className='dContainer'>
     <div className='dCards'>
      <div className='fig-flex'>
        <div>
        <p className={`fig-map ${colorClass}`} style={{ color: color }}>{loanFig.name}</p>
        <h4>{loanFig.fig}<span>28</span></h4>
        </div>
        <Link to={`/dashboard/${loanFig.href}`} className='dash-wallet'>
                <CiWallet />
              </Link>
      </div>
      <div className='percent-flex'>
        <div className='percent-rect'>
       <p className={`fig-map ${colorClass}`} style={{ color: color, backgroundColor: color}}><BsSquare/></p>
       <p className={`fig-map ${colorClass}`}style={{ color: color }}>2.15%</p>
       <span>Last month</span>
        </div>
        <div className='dash-view'><p>View more</p></div>
      </div>

    </div>
    </div>
    </li>
  )
});

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
