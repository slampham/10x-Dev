import React from 'react'
import styled from 'styled-components'
import { StyledChartCard } from './ChartCard'

const StyledLargeCard = styled(StyledChartCard)`
  .title-buttons {
    button {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 600;
      color: ${({active}) => active ? 'white' : '#1D8CF8'};
      background: ${({active}) => active ? '#1D8CF8' : 'none'};
      border-color: #1D8CF8;
      padding: .1em .5em;
      border-radius: 3px;
    }
  }

  @media (min-width: 425px) {
    .title-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    button {
      padding: .2em 1em;
    }
  }
`

function LargeChartCard({title, subtitle, children, className, active}) {
  return (
    <StyledLargeCard {...{className, active}}>
      <div className='title-buttons'>
        <h3 className='title'>{title}</h3>
        <div className='buttons'><button>Accounts</button><button>Purchases</button><button>Sessions</button></div>
      </div>

      {subtitle}
      <div className='chart-container'>
        {children}
      </div>
    </StyledLargeCard>
  )
}

export default LargeChartCard