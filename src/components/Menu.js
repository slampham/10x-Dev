import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'

const StyledMenu = styled.nav`
  background-color: #1E89F8;
  padding: 1.5em;
  min-width: 200px;

  transition: var(--trans-time) ease-in-out;

  hr, li {
    margin-top: 2.5em;
  }

  .menu-title {
    display: flex;
    align-items: center;

    .icon {
      font-size: 1.5em;
    }

    span {
      margin-left: 1em;
      font-size: 14px;
      font-weight: 400;
    }
  }

  hr {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;

    .icon {
      font-size: 1.5em;
    }

    span {
      margin-left: 2em;
      font-size: 10px;
      font-weight: 300;
    }
  }

  @media (max-width: 999px) {
    position: fixed;
    top: 0;  
    bottom: 0;
    left: -200px;
  }

  @media (min-width: 1000px) {
    height: 92%;
    width: 250px;
    border-radius: 5px;
    margin-left: calc(1.5 * var(--margin));
  }
`

function Menu({MenuOpen}) {
  return (
    <StyledMenu {...{MenuOpen}} className='menu'>
      <h3 className='menu-title'><FaReact className='icon'/> <span>10X DEV</span></h3>

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

export default Menu