import React, { useState } from 'react'
import styled from 'styled-components'

import SideMenu from './SideMenu'
import Header from './Header'
import Dashboard from './Dashboard'
import Footer from './Footer'

const StyledApp = styled.div`
  min-height: 100vh;
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
