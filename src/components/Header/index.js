import React from 'react'
// import LogoImage from '../../../public/images/cl_logo.png';

import {
  StyledHeader,
  StyledNavTitle,
  StyledHeaderNavButton,
  StyledNavBar,
  StyledLogo
} from '../styled'

export default function Header () {
  return (
    <StyledHeader>
      <StyledLogo>LOGO</StyledLogo>
      <StyledNavTitle>LEGAL CHECKUP</StyledNavTitle>
      <StyledNavBar>
        <StyledHeaderNavButton href='/'>Home</StyledHeaderNavButton>
        <StyledHeaderNavButton>Checkup</StyledHeaderNavButton>
        <StyledHeaderNavButton>About</StyledHeaderNavButton>
        <StyledHeaderNavButton>Help</StyledHeaderNavButton>
      </StyledNavBar>
    </StyledHeader>
  )
}
