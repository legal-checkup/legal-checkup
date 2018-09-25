import React from 'react'

import { CHECKUP_PATH, HOME_PATH } from '@state/constants'
import LinkInternal from '../LinkInternal'

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

      <StyledDesktopHeaderLink>
        <LinkInternal to={HOME_PATH}>Home</LinkInternal>
      </StyledDesktopHeaderLink>

      <LinkInternal to={CHECKUP_PATH}>
        <StyledDesktopHeaderLink>Checkup</StyledDesktopHeaderLink>
      </LinkInternal>

      <StyledDesktopHeaderLink>About</StyledDesktopHeaderLink>

      <StyledDesktopHeaderLink>Help</StyledDesktopHeaderLink>
    </StyledDesktopHeader>
  )
}
