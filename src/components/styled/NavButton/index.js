import styled from 'styled-components'

const NavButton = styled.a`
  color: red;
  font-size: 16px;
  border: none;
  padding: 4px 10px;
  background-color: rgb(219, 219, 212);
  margin: 2px;
  text-decoration: none;

  &:hover {
    color: white;
    background-color: red;
  }
`
NavButton.defaultName = 'StyledNavButton'

export default NavButton
