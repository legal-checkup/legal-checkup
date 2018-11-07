import React from 'react'

import {
  CHECKUP_PATH,
  HOME_PATH,
  HELP_PATH,
  ABOUT_PATH
} from '@state/constants'

import {
  StyledMobileHeader,
  StyledMobileHeaderLegal,
  StyledMobileHeaderLinkContainer
} from '@components/styled/MobileHeader'

import {
  MobileHeaderNavLink,
  MobileHeaderLogoLink
} from '@containers/MobileHeaderLinks'

export default function MobileHeader () {
  return (
    <StyledMobileHeader>
      <MobileHeaderLogoLink to={HOME_PATH}>LOGO</MobileHeaderLogoLink>
      <StyledMobileHeaderLegal>LEGAL CHECKUP</StyledMobileHeaderLegal>

      <StyledMobileHeaderLinkContainer>
        <MobileHeaderNavLink to={HOME_PATH}>Home</MobileHeaderNavLink>
        <MobileHeaderNavLink to={CHECKUP_PATH}>Checkup</MobileHeaderNavLink>
        <MobileHeaderNavLink to={ABOUT_PATH}>About</MobileHeaderNavLink>
        <MobileHeaderNavLink to={HELP_PATH}>Help</MobileHeaderNavLink>
      </StyledMobileHeaderLinkContainer>
    </StyledMobileHeader>
  )
}
