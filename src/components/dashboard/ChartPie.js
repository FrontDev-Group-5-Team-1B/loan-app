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
            breakpoint: 360,
            options: {
              chart: {
                width: 250
              },
              legend: {
                position: 'bottom'
              }
            }
          }]}
      });


  return (
    <div>
        
       <Chart options={state.options} series={state.series} type="donut" width={420} height={300} />
  

    </div>
  )
}

export default ChartPie