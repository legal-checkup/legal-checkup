import styled from 'styled-components'

import makeLocalLink from '../../../wrappers/makeLocalLink'

const FooterLinkInternal = styled.a`
  height: 25px;
  margin-left: 140px;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  vertical-align: center;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`
FooterLinkInternal.displayName = 'StyledDesktopFooterLinkInternal'

const DesktopFooterLinkInternal = makeLocalLink(FooterLinkInternal)

export default DesktopFooterLinkInternal
