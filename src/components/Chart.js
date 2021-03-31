import React from 'react'

function Chart({title, totalCount}) {
  return (
    <div className='Chart'>
      <h4>{title}</h4>
      <div className='countContainer'>
        <i/> {totalCount}
      </div>
    </div>
  )
}

export default Chart
