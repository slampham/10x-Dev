import React, { useState } from 'react'
import styled from 'styled-components'

import Menu from './Menu'
import Header from './Header'
import Dashboard from './Dashboard'
import Footer from './Footer'

const StyledApp = styled.div`
  min-height: 100vh;
  padding: 0 var(--margin);

  ${({MenuOpen}) => MenuOpen && `
    transform: translate(200px);
  `}
  transition: transform var(--trans-time) ease-in-out;

  @media (min-width: 1000px) {
    .page-except-header {
      display: flex;
    }
  }
`

function App() {
  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <StyledApp {...{MenuOpen}}>
      <Header {...{MenuOpen, setMenuOpen}}/>
      <div className='page-except-header'>
        <Menu {...{MenuOpen}}/>
        <div className='page-except-header-menu'>
          <Dashboard {...{MenuOpen}}/>
          <Footer />
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
