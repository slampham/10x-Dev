import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

import Menu from './Menu'
import Header from './Header'
import GitHubFacts from './GitHubFacts'
import CodeComplexity from './CodeComplexity'
import ReadMe from './ReadMe'
import Footer from './Footer'
import ResearchPaper from './ResearchPaper'
import Colab from './Colab'

const StyledApp = styled.div`
  ${({MenuOpen}) => MenuOpen && `
    transform: translate(200px);
  `}
  transition: transform var(--trans-time) ease-in-out;

  min-height: 100vh;

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
      margin: calc(2 * var(--margin));
      margin-top: 50px;
      
      width: 100%;
    }
  }
`

function App() {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [headerTitle, setHeaderTitle] = useState('README')

  return (
    <StyledApp {...{MenuOpen}}>
      <Router>
        <motion.div className='header-menu'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Header {...{MenuOpen, setMenuOpen, headerTitle}}/>
          <Menu {...{setHeaderTitle}}/>
        </motion.div>

        <div className='route-footer'>
          <Switch>
            <Route exact path='/'>
              <ReadMe/>
            </Route>
            <Route path='/github-facts'>
              <GitHubFacts/>
            </Route>
            <Route path='/code-complexity'>
              <CodeComplexity/>
            </Route>
            <Route path='/research-paper'>
              <ResearchPaper/>
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </StyledApp>
  );
}

export default App;
