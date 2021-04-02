import React from 'react'
import styled from 'styled-components'
import SideMenuToggler, { StyledButton } from './SideMenuToggler.js'

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

  color: white;
  background: rgb(30, 30, 46);

  ${StyledButton} {
    position: absolute;
    left: var(--margin);
  }
`

function Header({sideMenuOpen, setSideMenuOpen}) {
  return (
    <StyledHeader>
      <SideMenuToggler {...{sideMenuOpen, setSideMenuOpen}} />
      <h3>DASHBOARD</h3>
    </StyledHeader>
  )
}

export default Header
