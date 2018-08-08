import React from 'react'
import {
  StyledHeader,
  StyledNavTitle,
  StyledNavButton,
  StyledNavBar,
  StyledLogo
} from '../styled'

export default function Header () {
  return (
    <StyledHeader>
      <StyledLogo>Logo</StyledLogo>
      <StyledNavTitle>Legal Health Checkup</StyledNavTitle>
      <StyledNavBar>
        <StyledNavButton href='/'>Home</StyledNavButton>
        <StyledNavButton>Checkup</StyledNavButton>
        <StyledNavButton>About</StyledNavButton>
        <StyledNavButton>Help</StyledNavButton>
      </StyledNavBar>
    </StyledHeader>
  )
}
