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

      <StyledDesktopHeaderLink href='/'>Home</StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink active href='/checkup'>
        Checkup
      </StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink href='/privacy-policy'>
        About
      </StyledDesktopHeaderLink>
      <StyledDesktopHeaderLink href='terms-of-use'>
        Help
      </StyledDesktopHeaderLink>
    </StyledDesktopHeader>
  )
}
