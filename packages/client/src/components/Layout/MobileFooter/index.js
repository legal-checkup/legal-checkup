import { PRIVACY_POLICY_PATH, TERMS_OF_USE_PATH, COMMUNITY_LAW_PATH } from '../../../state/constants'

import React from 'react'
import styled from 'styled-components'
import MobileFooterLinkInternal from '../../Link/MobileFooterLinkInternal'
import MobileFooterLinkExternal from '../../Link/MobileFooterLinkExternal'

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
      <MobileFooterLinkExternal href={COMMUNITY_LAW_PATH} target='_blank'>
        2018 by Community Law Wellington and Hutt Valley
      </MobileFooterLinkExternal>
      <MobileFooterLinkInternal href={PRIVACY_POLICY_PATH}>Privacy Policy</MobileFooterLinkInternal>
      <MobileFooterLinkInternal href={TERMS_OF_USE_PATH}>Terms of Use</MobileFooterLinkInternal>
    </StyledMobileFooter>
  )
}
