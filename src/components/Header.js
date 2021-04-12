import React from 'react'
import styled from 'styled-components'
import MenuToggler, { StyledButton } from './MenuToggler.js'

const StyledHeader = styled.header`
  padding: 20px var(--margin);
  height: 50px;
  
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

  @media (max-width: 999px) {
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
  }

  @media (min-width: 1000px) {
  }
`

function Header({MenuOpen, setMenuOpen, headerTitle}) {
  return (
    <StyledHeader>
      <MenuToggler {...{MenuOpen, setMenuOpen}} />
      <h3>{headerTitle}</h3>
    </StyledHeader>
  )
}

export default Header
