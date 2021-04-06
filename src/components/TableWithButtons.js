import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledTable } from './Table'
import { sampledUsers, percentiles } from './data'

const StyledTableWithButtons = styled(StyledTable)`
  button {
    padding: .2em;
    margin-bottom: 1em;
  }
`

function TableWithButtons({title, className}) {
  const [percentile, setPercentile] = useState('0.1%')

  const Buttons = percentiles.map(item => <button 
                                            className={percentile === item ? 'active' : undefined} 
                                            onClick={() => setPercentile(item)}>
                                            {item}
                                          </button>)

  const ths = sampledUsers[percentile][0].map(heading => <th>{heading}</th>)
  const trs = [];
  for (const [r, row] of sampledUsers[percentile].entries()) {
    if (r !== 0) {
      const tds = row.map(item => <td>{item}</td>)
      trs.push(<tr>{tds}</tr>)
    }
  }

  return (
    <StyledTableWithButtons {...{className}}>
      <div className='title-buttons'>
        <h3>{title}</h3>
        {Buttons}
      </div>

      <table>
        <thead>
          <tr>
            {ths}
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </StyledTableWithButtons>
  )
}

export default TableWithButtons