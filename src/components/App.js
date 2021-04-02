import React, { useState } from 'react'
import styled from 'styled-components'

import SideMenu from './SideMenu'
import Header from './Header'
import Dashboard from './Dashboard'

const StyledApp = styled.div`
  min-height: 100vh;
  margin-top: 50px;
`

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <StyledApp {...{sideMenuOpen}}>
      <Header {...{sideMenuOpen, setSideMenuOpen}}/>
      <SideMenu {...{sideMenuOpen}}/>
      <Dashboard/>
    </StyledApp>
  );
}

export default App;
