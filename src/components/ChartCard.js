import React from 'react'
import styled from 'styled-components'
import { StyledCard } from './Card'

const StyledChartCard = styled(StyledCard)`
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
`

function ChartCard({title, subtitle, children}) {
  return (
    <StyledChartCard >
      <h3 className='title'>{title}</h3>
      {subtitle}
      <div >
        {children}
      </div>
    </StyledChartCard>
  )
}

export default ChartCard
