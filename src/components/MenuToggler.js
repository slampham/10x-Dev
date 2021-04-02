import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 35px;
  width: 35px;
  padding: 5px;
  background: none;
  border: none;
  color: white;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  cursor: pointer;

  div {
    width: 100%;
    height: 1px;
    background-color: white;
    margin: 3px 0;
    transition: 0.4s;

    &:nth-child(2) {
      width: 75%;
    }

    ${({ MenuOpen }) => MenuOpen && `
      &:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 3px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(45deg) translate(-6px, -5px);
      }
    `}
  }

  @media (min-width: 1000px) {
    display: none;
  }
`

function MenuToggler({MenuOpen, setMenuOpen}) {
  return (
    <StyledButton onClick={() => setMenuOpen(state => !state)} {...{MenuOpen}}>
      <div />
      <div />
      <div />
    </StyledButton>
  )
}

export { StyledButton }
export default MenuToggler