import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledTable = styled(Card)`
  text-align: left;
  overflow: auto;

  h3 {
    font-size: 17px;
    font-weight: 200;
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

function Table({title, data, className}) {
  const ths = data[0].map(heading => <th key={heading}>{heading}</th>)
  const trs = [];
  for (const [r, row] of data.entries()) {
    if (r !== 0) {
      const tds = row.map((item, i) => <td key={i}>{item}</td>)
      trs.push(<tr key={r}>{tds}</tr>)
    }
  }

  return (
    <StyledTable {...{className}}>
      <h3>{title}</h3>

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

export { StyledTable }
export default Table