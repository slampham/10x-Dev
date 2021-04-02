import React from 'react'
import styled from 'styled-components'
import MenuToggler, { StyledButton } from './MenuToggler.js'

const StyledHeader = styled.header`
  position: sticky;
  height: 50px;
  padding: 20px var(--margin);
  left: 0;
  right: 0;
  top: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(30, 30, 46);

  ${StyledButton} {
    position: absolute;
    left: var(--margin);
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
  }
`

function Header({MenuOpen, setMenuOpen}) {
  return (
    <StyledHeader>
      <MenuToggler {...{MenuOpen, setMenuOpen}} />
      <h3>DASHBOARD</h3>
    </StyledHeader>
  )
}

export default Header
