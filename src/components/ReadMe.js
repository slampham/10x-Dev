import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { stagger, slowUp } from '../variants'

const StyledChild = styled(motion.div)``
function Child({children, className}) {
  return (
    <StyledChild variants={slowUp} {...{className}}>
    </StyledChild>
  )
}

const StyledParent = styled(StyledChild)``
function Parent({children, className}) {
  return (
    <StyledParent {...{className}}>
      {children}
    </StyledParent>
  )
}

const StyledReadMe = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`

function ReadMe() {
  return (
    <StyledReadMe variants={stagger} initial='hidden' animate='show'>
      <div><Parent>Test</Parent></div>
      <div><motion.div variants={slowUp}>Test</motion.div></div>

      <motion.div variants={slowUp}>Test</motion.div>
      <motion.div variants={slowUp}>Test</motion.div>

    </StyledReadMe>
  )
}

export default ReadMe