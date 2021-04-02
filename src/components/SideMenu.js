import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'

const StyledMenu = styled.nav`
  background-color: #1E89F8;
  padding: 1.5em;

  position: fixed;
  top: 0;  
  right: 100vw;
  bottom: 0;
  left: -200px;

  transition: var(--trans-time) ease-in-out;

  hr, li {
    margin-top: 1.5em;
  }

  .sidemenu-title {
    display: flex;

    span {
      margin-left: 1em;
      font-size: 14px;
    }
  }

  hr {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;

    .icon {
      font-size: 1.25rem;
    }

    span {
      margin-left: 1.5em;
      font-size: 9px;
      font-weight: 300;
    }
  }
`

function SideMenu({sideMenuOpen}) {
  return (
    <StyledMenu {...{sideMenuOpen}}>
      <h3 className='sidemenu-title'><FaReact /> <span>10X DEV</span></h3>

      <hr/>

      <ul>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
        <li><a href='/'><FaReact className='icon'/> <span>DASHBOARD</span></a></li>
      </ul>
    </StyledMenu>
  )
}

export default SideMenu