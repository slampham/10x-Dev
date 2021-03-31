import React, { useState } from 'react'
import styled from 'styled-components'

import SideMenu from './SideMenu'
import Header from './Header'
import Chart from './Chart'

const StyledApp = styled.div`

`

function App() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  return (
    <StyledApp>
      <Header {...{sideMenuOpen, setSideMenuOpen}}/>
      { sideMenuOpen && <SideMenu />}
      <Chart title='Commits' totalCount={243263} />
      <Chart title='Issues' totalCount={463753} />
    </StyledApp>
  );
}

export default App;
