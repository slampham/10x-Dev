import React from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

import { StyledChartCard } from './ChartCard'
import { logChart } from './charts.js';

const StyledLargeCard = styled(StyledChartCard)`
  .title-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

function ChartCardButtons({className, factMetric, setFactMetric}) {
  const { data, options } = logChart()

  return (
    <StyledLargeCard {...{className}} >
      <div className='title-buttons'>
        <h3 className='title'>Median Star Count</h3>
        <div className='buttons'>
          <button 
            className={factMetric === 'median' ? 'active' : undefined} 
            onClick={() => setFactMetric('median')}>
            Median
          </button>
          <button 
            className={factMetric === 'diff' ? 'active' : undefined} 
            onClick={() => setFactMetric('diff')}>
            Percent Change
          </button>
          <button 
            className={factMetric === 'count' ? 'active' : undefined}
            onClick={() => setFactMetric('count')}>
            Count
          </button>
        </div>
      </div>

      <div className='chart-container'>
        <Line {...{data, options}} />
      </div>
    </StyledLargeCard>
  )
}

export default ChartCardButtons