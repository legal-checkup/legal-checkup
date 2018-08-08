import styled from 'styled-components'

const NavButton = styled.button`
  background-color: #ededed;
  border-radius: ${({ direction }) =>
    direction === 'back'
      ? '5px 0 0 5px'
      : direction === 'forward' ? '0 5px 5px 0' : '0'};
  color: ${({ onClick }) => (onClick ? '#000' : '#c0c0c0')};
  height: 42px;
  outline: none;
  width: 48px;
`

NavButton.displayName = 'StyledNavButton'

export default NavButton
