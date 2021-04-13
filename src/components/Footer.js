import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  a {
    font-size: 12px;
    font-weight: 300;

    & + a {
      margin-left: 2em;
    }
  }
`

function Footer() {
  return (
    <StyledFooter>
      <div><a href='https://spencerpham.dev/' target="_blank" rel="noreferrer">SPENCER PHAM</a><a href='https://github.com/slampham' target="_blank" rel="noreferrer">GITHUB</a></div>
    </StyledFooter>
  )
}

export default Footer