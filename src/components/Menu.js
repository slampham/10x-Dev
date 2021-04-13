import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'

const StyledMenu = styled.nav`
  background: linear-gradient(#1D8CF8, #3358F4);
  padding: 1.5em;
  min-width: 200px;

  transition: var(--trans-time) ease-in-out;

  hr, li {
    margin-top: 3em;
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

  .link {
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
    width: 200px;
    border-radius: 5px;
    margin-left: calc(1.5 * var(--margin));
  }
`

function Menu() {
  function MotionLink({external, to, children}) {
    return (
      <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: .1 }}>
        { external ? 
          <a href={to} className='link'><FaReact className='icon' target="_blank" rel="noreferrer"/> <span>{children}</span></a> :
          <Link to={to} className='link'><FaReact className='icon'/> <span>{children}</span></Link>
        }
      </motion.li>
    )
  }

  return (
    <StyledMenu className='menu'>
      <h3 className='menu-title'><FaReact className='icon'/> <span>10X DEV</span></h3>

      <hr/>

      <ul>
        <MotionLink to='/'>README</MotionLink>
        <MotionLink to='/github-facts'>GITHUB FACTS</MotionLink>
        <MotionLink to='/code-complexity'>CODE COMPLEXITY</MotionLink>
        <MotionLink to='/research-paper'>RESEARCH PAPER</MotionLink>
        <MotionLink external to='https://colab.research.google.com/drive/1c6-tahKwTqxG8aOacnQ9Y-Bd8VHUrYYU'>GOOGLE COLAB</MotionLink>
      </ul>
    </StyledMenu>
  )
}

export default Menu