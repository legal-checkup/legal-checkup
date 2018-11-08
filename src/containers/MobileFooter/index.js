import {
  PRIVACY_POLICY_PATH,
  TERMS_OF_USE_PATH,
  COMMUNITY_LAW_PATH
} from '@state/constants'

import StyledMobileFooter from '@components/styled/MobileFooter'
import LinkExternalMobile from '@components/styled/LinkExternalMobile'
import MobileFooterLink from '../MobileFooterLink'
import React from 'react'

export default function Footer () {
  return (
    <StyledMobileFooter>
      <LinkExternalMobile href={COMMUNITY_LAW_PATH} target='_blank'>
        2018 by Community Law Wellington and Hutt Valley
      </LinkExternalMobile>
      <MobileFooterLink to={PRIVACY_POLICY_PATH}>
        Privacy Policy
      </MobileFooterLink>
      <MobileFooterLink to={TERMS_OF_USE_PATH}>Terms of Use</MobileFooterLink>
    </StyledMobileFooter>
  )
}
