import styled from 'styled-components'

const FooterLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: red;
  }
`
FooterLink.displayName = 'StyledFooterLink'

export default FooterLink
