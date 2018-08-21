import React from 'react'
import {
  StyledDesktopHeader,
  StyledDesktopHeaderLogo,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink
} from './style'

export default function DesktopHeader () {
  return (
    <StyledDesktopHeader>
      <StyledDesktopHeaderLogo>LOGO</StyledDesktopHeaderLogo>

      <StyledDesktopHeaderLegal>LEGAL CHECKUP</StyledDesktopHeaderLegal>

      <StyledDesktopHeaderLink>Home</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink active>Checkup</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink>About</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink>Help</StyledDesktopHeaderLink>
    </StyledDesktopHeader>
  )
}
