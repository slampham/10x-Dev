import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'

import { StyledChartCard } from './ChartCard'
import { chartExample1, blueChart } from './charts.js';

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

function LargeChartCard({className}) {
  const { data, options } = blueChart('medianStarCounts')

  return (
    <StyledLargeCard {...{className}}>
      <div className='title-buttons'>
        <h3 className='title'>TotalShipments</h3>
        <div className='buttons'><button>Accounts</button><button>Purchases</button><button>Sessions</button></div>
      </div>

      <h4 className='subtitle'>Performance</h4>
      <div className='chart-container'>
        <Line {...{data, options}} />
      </div>
    </StyledLargeCard>
  )
}

export default LargeChartCard