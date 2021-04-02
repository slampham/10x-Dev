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

function Table({className}) {
  return (
    <StyledTable {...{className}}>
      <h3>Simple Table</h3>

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>COUNTRY</th>
            <th>CITY</th>
            <th>SALARY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td>$36,738</td>
          </tr>
          <tr>
            <td>Minerva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaai-Waas</td>
            <td>$23,789</td>
          </tr>
          <tr>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td>$56,142</td>
          </tr>
          <tr>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td>$38,735</td>
          </tr>
          <tr>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td>$63,542</td>
          </tr>
          <tr>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td>$78,615</td>
          </tr>
          <tr>
            <td>Jon Porter</td>
            <td>Portugal</td>
            <td>Gloucester</td>
            <td>$98,615</td>
          </tr>
        </tbody>
      </table>


    </StyledTable>
  )
}

export default Table