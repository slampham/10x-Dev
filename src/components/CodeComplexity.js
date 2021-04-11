import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ChartCard from './ChartCard'
import { metrics } from './data'
import { stagger } from '../variants'

const StyledCodeComplexity = styled(motion.div)`
  display: grid;
  gap: var(--margin);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (min-width: 1000px) {
    margin: calc(2 * var(--margin));
    margin-top: 50px;
  }
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