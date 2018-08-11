import React from 'react'
import { StyledHeader, StyledNavButton } from '../styled'

export default function Header () {
  return (
    <header>
      <StyledHeader>
        <img src='./images/cl_logo.png' alt='' />
        <h1>Legal Health Checkup</h1>
        <div>
          <StyledNavButton href='/'>Home</StyledNavButton>
          <StyledNavButton>page1</StyledNavButton>
          <StyledNavButton>page2</StyledNavButton>
          <StyledNavButton>page3</StyledNavButton>
        </div>
      </StyledHeader>
    </header>
  )
}
