import React from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'
import ChartCard from './ChartCard'
import Table from './Table'
import { chartExample1, chartExample2, chartExample3, chartExample4 } from './charts.js';

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 40px;
  overflow: hidden;
`

function Dashboard() {
  return (
    <StyledDashboard>
      <ChartCard title='TotalShipments' subtitle={<h4 className='subtitle'>Performance</h4>} >
        <Line data={chartExample1['data1']} options={chartExample1.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} >
        <Line data={chartExample2.data} options={chartExample2.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} >
        <Bar data={chartExample3.data} options={chartExample3.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} >
        <Line data={chartExample4.data} options={chartExample4.options} />
      </ChartCard>

      <Table/>
    </StyledDashboard>
  )
}

export default Dashboard