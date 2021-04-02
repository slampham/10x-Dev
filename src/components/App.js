import React, { useState } from 'react'
import styled from 'styled-components'

import SideMenu from './SideMenu'
import Header from './Header'
import Dashboard from './Dashboard'
import Footer from './Footer'

const StyledApp = styled.div`
  min-height: 100vh;
  padding: 0 var(--margin);

  ${({sideMenuOpen}) => sideMenuOpen && `
    transform: translate(200px);
  `}
  transition: transform var(--trans-time) ease-in-out;

  @media (min-width: 1000px) {
  }
`

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <StyledApp {...{sideMenuOpen}}>
      <Header {...{sideMenuOpen, setSideMenuOpen}}/>
      <SideMenu {...{sideMenuOpen}}/>
      <Dashboard {...{sideMenuOpen}}/>
      <Footer />
    </StyledApp>
  );
}

export default App;
