import React from 'react'
import { connect } from 'react-redux'

import { CHECKUP_PATH, HOME_PATH } from '@state/constants'

import {
  StyledDesktopHeader,
  StyledDesktopHeaderLogo,
  StyledDesktopHeaderLegal
} from './style'

import HeaderLink from '@containers/DesktopHeaderLink'

export default function DesktopHeader () {
  return (
    <StyledDesktopHeader>
      <StyledDesktopHeaderLogo>LOGO</StyledDesktopHeaderLogo>

      <StyledDesktopHeaderLegal>LEGAL CHECKUP</StyledDesktopHeaderLegal>

      {/* <StyledDesktopHeaderLink>
        <LinkInternal to={HOME_PATH}>Home</LinkInternal>
      </StyledDesktopHeaderLink> */}

      <HeaderLink to={HOME_PATH}>Home</HeaderLink>

      {/* <LinkInternal to={CHECKUP_PATH}>
        <StyledDesktopHeaderLink>Checkup</StyledDesktopHeaderLink>
      </LinkInternal> */}

      <HeaderLink to={CHECKUP_PATH}>Checkup</HeaderLink>

      {/* <StyledDesktopHeaderLink>About</StyledDesktopHeaderLink>

      <StyledDesktopHeaderLink>Help</StyledDesktopHeaderLink> */}
    </StyledDesktopHeader>
  )
}
