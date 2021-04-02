import React from 'react'
import Card from './Card'

function ChartCard({title, subtitle, children}) {
  return (
    <Card >
      <h3 className='title'>{title}</h3>
      {subtitle}
      <div >
        {children}
      </div>
    </Card>
  )
}

export default ChartCard
