import React from 'react'
import styled from 'styled-components'
import { StyledCard } from './Card'

const StyledTable = styled(StyledCard)`
  text-align: left;
  overflow: auto;

  h3 {
    font-size: 17px;
    font-weight: 200;
    margin-bottom: 1em;
  }

  button {
    padding: .2em;
    margin-bottom: 1em;

  }

  table {
    width: 100%;

    thead, tbody {
      width: 100%;
    }

    th {
      font-size: 12px;
      font-weight: bold;
    }

    td {
      font-size: 14px;
      font-weight: 400;
    }

    th, td {
      padding: .5em;
    }
  }
`

function Table({title, data, className, buttons}) {
  let Buttons;
  if (buttons) {
    Buttons = buttons.map(item => <button>{item}</button>)
  }

  const ths = data[0].map(heading => <th>{heading}</th>)
  const trs = [];
  for (const [r, row] of data.entries()) {
    if (r !== 0) {
      const tds = row.map(item => <td>{item}</td>)
      trs.push(<tr>{tds}</tr>)
    }
  }

  return (
    <StyledTable {...{className}}>
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


    </StyledTable>
  )
}

export default Table