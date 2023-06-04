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
          data: [50, 70, 35, 80, 49, 60, 70, 91, 125]
        },
        {
          name: 'Loan Paid',
          data: [90, 20, 35, 10, 49, 60, 100, 91, 125]
        },
        {
          name: 'Loan Declined',
          data: [30, 40, 65, 50, 80, 60, 70, 91, 125]
        }
      ]
      });

  return (
    <div className='chart-section'>
    <div>
       <Chart options={state.options} series={state.series} type="bar" width={850} height={320} />
    </div>
   
    </div>
  );
}

export default ChartComponent;