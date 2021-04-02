import React from 'react'
import styled from 'styled-components'
import { StyledCard } from './Card'

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

function ChartCard({title, subtitle, children, className}) {
  return (
    <StyledChartCard className={className}>
      <h3 className='title'>{title}</h3>
      {subtitle}
      <div className='chart-container'>
        {children}
      </div>
    </StyledChartCard>
  )
}

export { StyledChartCard }
export default ChartCard
