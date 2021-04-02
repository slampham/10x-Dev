import React, { useState } from 'react'
import styled from 'styled-components'

import Menu from './Menu'
import Header from './Header'
import Dashboard from './Dashboard'
import Footer from './Footer'

const StyledApp = styled.div`
  min-height: 100vh;

  ${({MenuOpen}) => MenuOpen && `
    transform: translate(200px);
  `}
  transition: transform var(--trans-time) ease-in-out;

  @media (max-width: 999px) {
    padding: 0 var(--margin);
  }

  @media (min-width: 1000px) {
    display: flex;

    .header-menu {
      height: 100vh;
      position: sticky;
      top: 0;
    }
  }
`

function App() {
  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <StyledApp {...{MenuOpen}}>
      <div className='header-menu'>
        <Header {...{MenuOpen, setMenuOpen}}/>
        <Menu {...{MenuOpen}}/>
      </div>

      <div className="dash-footer">
        <Dashboard {...{MenuOpen}}/>
        <Footer />
      </div>
    </StyledApp>
  );
}

export default App;
