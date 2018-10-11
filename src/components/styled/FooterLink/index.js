import styled from 'styled-components'

const FooterLink = styled.a`
  width: 92px;
  height: 20px;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  &:hover {
    color: red;
  }
`
FooterLink.displayName = 'StyledFooterLink'

export default FooterLink
