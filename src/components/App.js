import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Menu from './Menu'
import Header from './Header'
import Dashboard from './Dashboard'
import ReadMe from './ReadMe'
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

    .route-footer {
      width: 100%;
    }
  }
`

function App() {
  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <StyledApp {...{MenuOpen}}>
      <Router>
        <div className='header-menu'>
          <Header {...{MenuOpen, setMenuOpen}}/>
          <Menu {...{MenuOpen}}/>
        </div>

        <div className='route-footer'>
          <Switch>
            <Route exact path='/'>
              <Dashboard {...{MenuOpen}}/>
            </Route>
            <Route path='/readme'>
              <ReadMe/>
            </Route>
            <Route path='/code-complexity'>
            </Route>
            <Route path='/research-paper'>
            </Route>
            <Route path='/google-colab'>
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </StyledApp>
  );
}

export default App;
