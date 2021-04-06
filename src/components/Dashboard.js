import React, { useState } from 'react'
import styled from 'styled-components'
import ChartCardButtons from './ChartCardButtons'
import ChartCard, { StyledChartCard } from './ChartCard'
import Table from './Table'
import TableWithButtons from './TableWithButtons'
import { percentileInfo, sampledUsers, percentiles } from './data'

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  /* overflow: hidden;  //FIXME: not sure if needed */

  @media (min-width: 1000px) {
    margin: calc(3.5 * var(--margin)) calc(2 * var(--margin));

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

function Dashboard() {
  const [factMetric, setFactMetric] = useState('median')

  return (
    <StyledDashboard>
      <ChartCardButtons title='medianStarCounts' className='chard-card-buttons' {...{factMetric, setFactMetric}} />

      <ChartCard title='Commits' occurence={2} {...{factMetric}} />
      <ChartCard title='Commit Comments' occurence={3} {...{factMetric}} />
      <ChartCard title='Followers' occurence={4} {...{factMetric}} />
      <ChartCard title='Following' occurence={5} {...{factMetric}} />
      <ChartCard title='Issue Comments' occurence={6} {...{factMetric}} />
      <ChartCard title='Issue Events' occurence={7} {...{factMetric}} />
      <ChartCard title='Issues Reported' occurence={8} {...{factMetric}} />
      <ChartCard title='Issues Assigned' occurence={9} {...{factMetric}} />
      <ChartCard title='Organization Membership' occurence={10} {...{factMetric}} />
      <ChartCard title='Project Membership' occurence={11} {...{factMetric}} />
      <ChartCard title='Projects Owned' occurence={12} {...{factMetric}} />
      <ChartCard title='Pull Request Comments' occurence={13} {...{factMetric}} />
      <ChartCard title='Pull Request History' occurence={14} {...{factMetric}} />
      <ChartCard title='Projects Starred' occurence={15} {...{factMetric}} />

      <Table title='Percentile Info' data={percentileInfo} className='table1' />
      <TableWithButtons title='Sampled Users' className='table2' />
    </StyledDashboard>
  )
}

export default Dashboard