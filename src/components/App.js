import React, { useState } from 'react'
import styled from 'styled-components'
import { Line, Bar } from 'react-chartjs-2'

import SideMenu from './SideMenu'
import Header from './Header'
import ChartCard from './ChartCard'
import { chartExample1, chartExample2, chartExample3, chartExample4 } from './charts.js';

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`

const Charts = styled.div`
  display: grid;
  grid-gap: 20px;
`

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <StyledApp>
      <Header {...{sideMenuOpen, setSideMenuOpen}}/>
      { sideMenuOpen && <SideMenu />}

      <Charts>
        <ChartCard title='TotalShipments' subtitle={<h4>Performance</h4>} >
          <Line data={chartExample1['data1']} options={chartExample1.options} />
        </ChartCard>

        <ChartCard title='TotalShipments' subtitle={<div><i>O</i> <span>763,215</span></div>} >
          <Line data={chartExample2.data} options={chartExample2.options} />
        </ChartCard>

        <ChartCard title='TotalShipments' subtitle={<div><i>O</i> <span>763,215</span></div>} >
          <Bar data={chartExample3.data} options={chartExample3.options} />
        </ChartCard>

        <ChartCard title='TotalShipments' subtitle={<div><i>O</i> <span>763,215</span></div>} >
          <Line data={chartExample4.data} options={chartExample4.options} />
        </ChartCard>
      </Charts>
    </StyledApp>
  );
}

export default App;
