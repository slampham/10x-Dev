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
      <LargeChartCard title='TotalShipments' className='large-chart-card' />

      <ChartCard title='TotalShipments' occurence={2} />
      <ChartCard title='TotalShipments' occurence={3} />
      <ChartCard title='TotalShipments' occurence={4} />
      <ChartCard title='TotalShipments' occurence={5} />

      <Table className='table1'/>
      <Table className='table2'/>
    </StyledDashboard>
  )
}

export default Dashboard