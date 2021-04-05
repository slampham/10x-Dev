import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'
import LargeChartCard from './LargeChartCard'
import ChartCard, { StyledChartCard } from './ChartCard'
import Table from './Table'
import { chartExample1, chartExample2, chartExample3, chartExample4 } from './charts.js';

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 30px;
  /* overflow: hidden;  //FIXME: not sure if needed */

  @media (min-width: 1000px) {
    margin: calc(3.5 * var(--margin)) calc(2 * var(--margin));

    grid-template: repeat(7, 300px) / repeat(6, 1fr);

    .large-chart-card {
      grid-area: 1 / 1 / 2 / -1;
    }

    .table1 {
      grid-area: -2 / 1 / -1 / 4;
    }

    .table2 {
      grid-area: -2 / 4 / -1 / -1;
    }

    ${StyledChartCard}:not(.large-chart-card) {
      grid-column: span 2;
    }
  }
`

function Dashboard() {
  return (
    <StyledDashboard>
      <LargeChartCard title='medianStarCounts' className='large-chart-card' />

      <ChartCard title='Commits' occurence={2} />
      <ChartCard title='Commit Comments' occurence={3} />
      <ChartCard title='Followers' occurence={4} />
      <ChartCard title='Following' occurence={5} />
      <ChartCard title='Issue Comments' occurence={6} />
      <ChartCard title='Issue Events' occurence={7} />
      <ChartCard title='Issues Reported' occurence={8} />
      <ChartCard title='Issues Assigned' occurence={9} />
      <ChartCard title='Organization Membership' occurence={10} />
      <ChartCard title='Project Membership' occurence={11} />
      <ChartCard title='Projects Owned' occurence={12} />
      <ChartCard title='Pull Request Comments' occurence={13} />
      <ChartCard title='Pull Request History' occurence={14} />
      <ChartCard title='Projects Starred' occurence={15} />

      <Table className='table1'/>
      <Table className='table2'/>
    </StyledDashboard>
  )
}

export default Dashboard