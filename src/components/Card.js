import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { down } from '../variants'

const StyledCard = styled(motion.div)`
  background-color: #27293D;
  border-radius: 5px;
  padding: 10px;
`

function Card({children, className}) {
  return (
    <StyledCard {...{className}} 
      variants={down} whileHover={{ scale: 1.03 }} 
    >
      {children}
    </StyledCard>
  )
}

export { StyledCard }
export default Card