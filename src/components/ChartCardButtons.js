import React from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

import { StyledChartCard } from './ChartCard'
import { blueChart } from './charts.js';

const StyledLargeCard = styled(StyledChartCard)`
  .title-buttons {
    button {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 600;
      color: ${({active}) => active ? 'white' : '#1D8CF8'};
      background: ${({active}) => active ? '#1D8CF8' : 'none'};
      border-color: #1D8CF8;
      border-radius: 3px;
      padding: .1em .5em;

      &.active {
        background: #1D8CF8;
        color: white;
      }
    }
  }

  @media (min-width: 425px) {
    .title-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        padding: .2em 1em;
      }
    }
  }
`

function ChartCardButtons({title, className, factMetric, setFactMetric}) {
  const { data, options } = blueChart('medianStarCounts')

  return (
    <StyledLargeCard {...{className}}>
      <div className='title-buttons'>
        <h3 className='title'>Median Star Count</h3>
        <div className='buttons'>
          <button 
            className={factMetric === 'median' ? 'active' : undefined} 
            onClick={() => setFactMetric('median')}>
            Medians
          </button>
          <button 
            className={factMetric === 'diff' ? 'active' : undefined} 
            onClick={() => setFactMetric('diff')}>
            Percent Diff
          </button>
          <button 
            className={factMetric === 'count' ? 'active' : undefined}
            onClick={() => setFactMetric('count')}>
            Counts
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