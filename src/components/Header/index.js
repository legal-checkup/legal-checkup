import React from 'react'
// import LogoImage from '../../../public/images/cl_logo.png';

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
      <StyledLogo>LOGO</StyledLogo>
      <StyledNavTitle>LEGAL CHECKUP</StyledNavTitle>
      <StyledNavBar>
        <StyledNavButton href='/'>Home</StyledNavButton>
        <StyledNavButton>Checkup</StyledNavButton>
        <StyledNavButton>About</StyledNavButton>
        <StyledNavButton>Help</StyledNavButton>
      </StyledNavBar>
    </StyledHeader>
  )
}
