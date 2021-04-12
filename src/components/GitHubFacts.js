import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import ChartCardButtons from './ChartCardButtons'
import ChartCard, { StyledChartCard } from './ChartCard'
import Table from './Table'
import TableWithButtons from './TableWithButtons'
import { percentileInfo, gitHubFacts } from './data'
import { stagger } from '../variants'

const StyledGitHubFacts = styled(motion.div)`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;

  @media (min-width: 1000px) {

    grid-template: repeat(7, 300px) / repeat(6, 1fr);

    .chard-card-buttons {
      grid-area: 1 / 1 / 2 / -1;
    }

    .table1 {
      grid-area: -2 / 1 / -1 / 4;
    }

    .table2 {
      grid-area: -2 / 4 / -1 / -1;
    }

    ${StyledChartCard}:not(.chard-card-buttons) {
      grid-column: span 2;
    }
  }
`

function GitHubFacts() {
  const [factMetric, setFactMetric] = useState('median')
  
  const ChartCards = gitHubFacts.map((fact, i) => <ChartCard title={fact} occurence={i} {...{factMetric}} key={fact} />)

  return (
    <StyledGitHubFacts variants={stagger} initial='hidden' animate='show' >
      <ChartCardButtons title='medianStarCounts' className='chard-card-buttons' {...{factMetric, setFactMetric}} />
      {ChartCards}
      <Table title='Percentile Info' data={percentileInfo} className='table1' />
      <TableWithButtons title='Sampled Users' className='table2' />
    </StyledGitHubFacts>
  )
}

export default GitHubFacts