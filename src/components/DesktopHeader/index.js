import React from 'react'
import {
  StyledDesktopHeader,
  StyledDesktopHeaderLogo,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLink,
  StyledDesktopHeaderLinkActive
} from './style'

export default function DesktopHeader () {
  return (
    <StyledDesktopHeader>
      <StyledDesktopHeaderLogo>LOGO</StyledDesktopHeaderLogo>

      <StyledDesktopHeaderLegal>Legal Checkup</StyledDesktopHeaderLegal>

      <StyledDesktopHeaderLink>Home</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLinkActive>Checkup</StyledDesktopHeaderLinkActive>
      <StyledDesktopHeaderLink>About</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink>Help</StyledDesktopHeaderLink>
    </StyledDesktopHeader>
  )
}
