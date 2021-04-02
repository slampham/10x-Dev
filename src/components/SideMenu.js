import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  background-color: #1E89F8;

  position: fixed;
  top: 0;  
  right: 0;
  left: 33vw;
  bottom: 0;

  ${({sideMenuOpen}) => !sideMenuOpen && `
    transform: translate(77vw);
  `}

  transition: var(--trans-time) ease-in-out;
`

function SideMenu({sideMenuOpen}) {
  return (
    <StyledMenu {...{sideMenuOpen}}>
      <i/> <h3>10x Dev</h3>

      <br/>

      <ul>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
        <i/> <li></li>
      </ul>
    </StyledMenu>
  )
}

export default SideMenu