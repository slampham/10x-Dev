import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { stagger, slowUp } from '../variants'

const StyledReadMe = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`

function ReadMe() {
  return (
    <StyledReadMe variants={stagger} initial='hidden' animate='show'>
      <div><motion.div variants={slowUp}>Test</motion.div></div>
      <div><motion.div variants={slowUp}>Test</motion.div></div>
      <div><motion.div variants={slowUp}>Test</motion.div></div>

    </StyledReadMe>
  )
}

export default ReadMe