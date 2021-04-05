import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'

import { StyledCard } from './Card'
import { blueChart, pinkChart, greenChart } from './charts.js';

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

function ChartCard({title, factMetric, occurence, className}) {
  let chart;

  if ((occurence - 1) % 3 === 0) {
    const { data, options } = blueChart(title, factMetric)
    chart = <Line {...{data, options}} />
  }
  else if ((occurence - 1) % 3 === 1) {
    const { data, options } = pinkChart(title, factMetric)
    chart = <Bar {...{data, options}} />
  }
  else {
    const { data, options } = greenChart(title, factMetric)
    chart = <Line {...{data, options}} />
  }

  return (
    <StyledChartCard {...{className}}>
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
