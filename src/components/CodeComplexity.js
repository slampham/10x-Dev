import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ChartCard from './ChartCard'
import { metrics } from './data'
import { stagger } from '../variants'

const StyledCodeComplexity = styled(motion.div)`
  display: grid;
  gap: calc(1.5 * (var(--margin)));
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

function CodeComplexity() {
  const ChartCards = metrics.map((metric, i) => <ChartCard title={metric} occurence={i} key={metric} />)

  return (
    <StyledCodeComplexity variants={stagger} initial='hidden' animate='show' >
      {ChartCards}
    </StyledCodeComplexity>
  )
}

export default CodeComplexity