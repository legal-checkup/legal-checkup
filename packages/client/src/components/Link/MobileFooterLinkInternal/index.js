import styled from 'styled-components'

import makeLocalLink from '../../../wrappers/makeLocalLink'

const FooterLinkInternal = styled.a`
  padding-top: 5px;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`
FooterLinkInternal.displayName = 'StyledMobileFooterLinkInternal'

const MobileFooterLinkInternal = makeLocalLink(FooterLinkInternal)

export default MobileFooterLinkInternal
