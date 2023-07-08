import React, { useState } from 'react';
import Chart from 'react-apexcharts';


const ChartComponent = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          }
        },
        series: [{
          name: 'Loan Given out',
          data: [50, 70, 35, 80, 49, 60, 70, 91, 125, 200, 135, 200]
        },
        {
          name: 'Loan Paid',
          data: [90, 20, 35, 10, 49, 60, 100, 91, 125, 60, 180, 250]
        },
        {
          name: 'Loan Declined',
          data: [30, 40, 65, 50, 80, 60, 70, 91, 125, 49, 200, 180]
        }
      ]
      });

  return (
    <div>
    <div>
       <Chart options={state.options} series={state.series} type="bar"/>
    </div>
   
    </div>
  );
}

export default ChartComponent;