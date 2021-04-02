import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: #27293D;
  border-radius: 5px;
  padding: 10px;
`

function Card({children}) {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}

export { StyledCard }
export default Card