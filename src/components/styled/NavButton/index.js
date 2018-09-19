import styled from 'styled-components'

const NavButton = styled.button`
  background-color: #ededed;
  border: none;
  color: ${({ onClick }) => (onClick ? '#000' : '#c0c0c0')};
  height: 42px;
  outline: none;
  width: 48px;
`

NavButton.displayName = 'StyledNavButton'

export default NavButton
