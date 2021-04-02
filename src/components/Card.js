import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: #27293D;
  border-radius: 5px;
  padding: 0 10px;

  > * {
    margin: 10px 0;
  }
`

function Card({children}) {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export default Card