import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'
import LargeChartCard from './LargeChartCard'
import ChartCard from './ChartCard'
import Table from './Table'
import { chartExample1, chartExample2, chartExample3, chartExample4 } from './charts.js';

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 40px;
  overflow: hidden;  //FIXME: not sure if needed

  @media (min-width: 1000px) {
    grid-template: repeat(3, 300px) / repeat(6, 1fr);

    .chart1 {
      grid-area: 1 / 1 / 2 / -1;
    }

    .chart2 {
      grid-area: 2 / 1 / 3 / 3;
    }

    .chart3 {
      grid-area: 2 / 3 / 3 / 5;
    }

    .chart4 {
      grid-area: 2 / 5 / 3 / -1;
    }

    .table1 {
      grid-area: -2 / 1 / -1 / 4;
    }

    .table2 {
      grid-area: -2 / 4 / -1 / -1;
    }
  }
`

function Dashboard() {
  return (
    <StyledDashboard>
      <LargeChartCard title='TotalShipments' subtitle={<h4 className='subtitle'>Performance</h4>} className='chart1'>
        <Line data={chartExample1['data1']} options={chartExample1.options} />
      </LargeChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} className='chart2'>
        <Line data={chartExample2.data} options={chartExample2.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} className='chart3'>
        <Bar data={chartExample3.data} options={chartExample3.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} className='chart4'>
        <Line data={chartExample4.data} options={chartExample4.options} />
      </ChartCard>

      <Table className='table1'/>
      <Table className='table2'/>
    </StyledDashboard>
  )
}

export default Dashboard