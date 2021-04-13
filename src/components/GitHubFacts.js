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
  grid-auto-rows: 300px;
  grid-gap: 30px;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    .chard-card-buttons {
      grid-column: 1 / -1;
    }

    .table1 {
      grid-column: span 2;
    }

    .table2 {
      grid-column: span 2;
    }

    ${StyledChartCard}:not(.chard-card-buttons) {
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