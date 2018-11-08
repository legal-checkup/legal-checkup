import {
  PRIVACY_POLICY_PATH,
  TERMS_OF_USE_PATH,
  COMMUNITY_LAW_PATH
} from '@state/constants'

import StyledDesktopFooter from '@components/styled/DesktopFooter'
import LinkExternal from '@components/styled/LinkExternal'
import FooterLink from '../FooterLink'
import React from 'react'

export default function Footer () {
  return (
    <StyledDesktopFooter>
      <LinkExternal href={COMMUNITY_LAW_PATH} target='_blank'>
        2018 by Community Law Wellington and Hutt Valley
      </LinkExternal>
      <FooterLink to={PRIVACY_POLICY_PATH}>Privacy Policy</FooterLink>
      <FooterLink to={TERMS_OF_USE_PATH}>Terms of Use</FooterLink>
    </StyledDesktopFooter>
  )
}
