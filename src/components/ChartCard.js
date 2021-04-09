import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'

import Card from './Card'
import { blueChart, pinkChart, greenChart } from './charts.js';

const StyledChartCard = styled(Card)`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 20px;
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
      <h3 className="title">{title}</h3>
      <div className='chart-container'>
        {chart}
      </div>
    </StyledChartCard>
  )
}

export { StyledChartCard }
export default ChartCard
