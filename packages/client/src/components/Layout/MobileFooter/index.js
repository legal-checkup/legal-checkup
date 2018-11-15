import { PRIVACY_POLICY_PATH, TERMS_OF_USE_PATH, COMMUNITY_LAW_PATH } from '../../../state/constants'

import React from 'react'
import styled from 'styled-components'
import MobileFooterLink from '../../Link/MobileFooterLink'

const StyledMobileFooter = styled.div`
  height: 130px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #202020;
`
StyledMobileFooter.displayName = 'StyledMobileFooter'

export default function MobileFooter () {
  return (
    <StyledMobileFooter>
      <MobileFooterLink href={COMMUNITY_LAW_PATH} target='_blank'>
        2018 by Community Law Wellington and Hutt Valley
      </MobileFooterLink>
      <MobileFooterLink to={PRIVACY_POLICY_PATH}>Privacy Policy</MobileFooterLink>
      <MobileFooterLink to={TERMS_OF_USE_PATH}>Terms of Use</MobileFooterLink>
    </StyledMobileFooter>
  )
}
