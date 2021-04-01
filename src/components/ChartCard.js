import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'

const StyledCard = styled.div`
  background-color: #27293D;
  border-radius: 5px;
  padding: 0 10px;

  > * {
    margin: 10px 0;
  }
`

const ChartContainer = styled.div`
`

function ChartCard({title, subtitle, children}) {
  return (
    <StyledCard className='Chart'>
      <h3 className='title'>{title}</h3>
      {subtitle}
      <ChartContainer>
        {children}
      </ChartContainer>
    </StyledCard>
  )
}

export default ChartCard
