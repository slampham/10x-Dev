import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'

import { StyledCard } from './Card'
import { chartExample1, chartExample2, chartExample3, chartExample4 } from './charts.js';

const StyledChartCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 12px;
    font-weight: 300;
    color: #9A9A9A;
  }

  .subtitle {
    font-size: 23px;
    font-weight: 200;
    color: white;
  }

  .chart-container {
    margin-top: 10px;
    flex-grow: 1;
  }
`

function ChartCard({title, occurence, className}) {
  let chart;

  if ((occurence - 1) % 3 === 0) {
    chart = <Line data={chartExample2.data} options={chartExample2.options} />
  }
  else if ((occurence - 1) % 3 === 1) {
    chart = <Bar data={chartExample3.data} options={chartExample3.options} />
  }
  else {
    chart = <Line data={chartExample4.data} options={chartExample4.options} />
  }

  return (
    <StyledChartCard className={className}>
      <h3 className='title'>{title}</h3>
      <div className='subtitle'><i>O</i> <span>763,215</span></div>
      <div className='chart-container'>
        {chart}
      </div>
    </StyledChartCard>
  )
}

export { StyledChartCard }
export default ChartCard
