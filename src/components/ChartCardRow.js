import React from 'react'
import styled from 'styled-components'

const StyledChartRow = styled.div`

`

function ChardCardRow({titles, subtitles, charts}) {
  return (
    <StyledChartRow>
      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} className='chart2'>
        <Line data={chartExample2.data} options={chartExample2.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} className='chart3'>
        <Bar data={chartExample3.data} options={chartExample3.options} />
      </ChartCard>

      <ChartCard title='TotalShipments' subtitle={<div className='subtitle'><i>O</i> <span>763,215</span></div>} className='chart4'>
        <Line data={chartExample4.data} options={chartExample4.options} />
      </ChartCard>
    </StyledChartRow>
  )
}

export default ChartCardRow