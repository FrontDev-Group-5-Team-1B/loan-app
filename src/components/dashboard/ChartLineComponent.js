import Chart  from 'react-apexcharts'
import React, { useState } from 'react'

const ChartLineComponent = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ['1st', '2nd', '3rd', '4th', '5th', '6th']
          }
        },
        series: [{
            name: 'Loan Given out',
          data: [50, 70, 35, 80, 49, 60]
        },
        {
            name: 'Loan Paid',
          data: [90, 20, 35, 10, 49, 60]
        },
        {
            name: 'Loan Declined',
          data: [30, 40, 65, 50, 80, 60]
        }
      ]
      });
  return (
    <div>
         <div>
    <Chart options={state.options} series={state.series} type="area" />
    </div>

    </div>
  )
}

export default ChartLineComponent