
import React from 'react'
import { CiWallet } from 'react-icons/ci'
import {BsSquare} from 'react-icons/bs'
import BorrowerLoanInfo from './BorrowerLoanInfo'
import { Link } from 'react-router-dom'
import DashBoardContainer from '../layouts/DashBoardContainer'
// import { Chart } from 'chart.js'
import ChartComponent from './ChartComponent'
import ChartLineComponent from './ChartLineComponent'
import ChartPie from './ChartPie'


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
        <Link to={`/dashboard/${loanFig.href}`} className={`fig-map ${colorClass}`} style={{ color: color, textDecoration: 'none'}}>{loanFig.name}</Link>
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
        <div> <Link to={`/dashboard/${loanFig.href}`} style={{textDecoration: 'none', color: '#1A1A1A'}}>
                View More
              </Link></div>
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
  <ChartComponent/>
</div> 
<h5>Loan Chart</h5>
<div className='dash-flex'>
  <div className='area-chart'>
  <ChartLineComponent/>
  </div>
  <div className='dash-pie'>
    <ChartPie />
  </div>
</div>
 </div>

  );

};

export default Dashboard;
