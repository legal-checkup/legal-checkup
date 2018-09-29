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

      <HeaderLink to={HOME_PATH}>Home</HeaderLink>
      <HeaderLink to={CHECKUP_PATH}>Checkup</HeaderLink>
      <HeaderLink>About</HeaderLink>
      <HeaderLink>Help</HeaderLink>
    </StyledDesktopHeader>
  )
}
