import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const ChartPie = () => {
    const [state, setState] = useState({
        series: [44, 41, 17],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 150
              },
              legend: {
                position: 'bottom'
              }
            }
          }]}
      });


  return (
    <div>
        <div>
       <Chart options={state.options} series={state.series} type="donut" width={500} height={320} />
    </div>

    </div>
  )
}

export default ChartPie