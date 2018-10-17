import styled, { css } from 'styled-components'

const LinkExternalMobile = styled.a`
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
  ${props =>
    props.active &&
    css`
      cursor: default;
    `};
`
LinkExternalMobile.displayName = 'StyledLinkExternalMobile'

export default LinkExternalMobile
