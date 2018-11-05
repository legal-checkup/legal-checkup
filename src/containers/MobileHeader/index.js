import React from 'react'

import {
  CHECKUP_PATH,
  HOME_PATH,
  HELP_PATH,
  ABOUT_PATH
} from '@state/constants'

import {
  StyledDesktopHeader,
  StyledDesktopHeaderLegal,
  StyledDesktopHeaderLegal2thChild,
  StyledMobileHeaderLinkContainer
} from '@components/styled/MobileHeader'

import {
  DesktopHeaderNavLink,
  DesktopHeaderLogoLink
} from '@containers/MobileHeaderLinks'

export default function DesktopHeader () {
  return (
    <StyledDesktopHeader>
      <DesktopHeaderLogoLink to={HOME_PATH}>LOGO</DesktopHeaderLogoLink>
      <StyledDesktopHeaderLegal>LEGAL CHECKUP</StyledDesktopHeaderLegal>

      <StyledMobileHeaderLinkContainer>
        <DesktopHeaderNavLink to={HOME_PATH}>Home</DesktopHeaderNavLink>
        <DesktopHeaderNavLink to={CHECKUP_PATH}>Checkup</DesktopHeaderNavLink>
        <DesktopHeaderNavLink to={ABOUT_PATH}>About</DesktopHeaderNavLink>
        <DesktopHeaderNavLink to={HELP_PATH}>Help</DesktopHeaderNavLink>
      </StyledMobileHeaderLinkContainer>
    </StyledDesktopHeader>
  )
}
