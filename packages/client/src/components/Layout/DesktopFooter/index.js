import { PRIVACY_POLICY_PATH, TERMS_OF_USE_PATH, COMMUNITY_LAW_PATH } from '../../../state/constants'

import React from 'react'
import styled from 'styled-components'
import DesktopFooterLinkExternal from '../../Link/DesktopFooterLinkExternal'
import DesktopFooterLinkInternal from '../../Link/DesktopFooterLinkInternal'

const StyledDesktopFooter = styled.div`
  width: 100%;
  height: 100px;
  background-color: #202020;
  line-height: 100px;
  position: absolute;
  bottom: 0px;
`
StyledDesktopFooter.displayName = 'StyledDesktopFooter'

export default function DesktopFooter () {
  return (
    <StyledDesktopFooter>
      <DesktopFooterLinkExternal href={COMMUNITY_LAW_PATH} target='_blank'>
        © 2018 by Community Law Wellington and Hutt Valley
      </DesktopFooterLinkExternal>
      <DesktopFooterLinkInternal href={PRIVACY_POLICY_PATH}>Privacy Policy</DesktopFooterLinkInternal>
      <DesktopFooterLinkInternal href={TERMS_OF_USE_PATH}>Terms of Use</DesktopFooterLinkInternal>
    </StyledDesktopFooter>
  )
}
