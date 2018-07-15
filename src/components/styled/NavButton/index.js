import styled from 'styled-components'

const NavButton = styled.button`
  background: gainsboro;
  color: inherit;
  padding: 0.5rem 1.5rem;
  border: 0;
  outline: none;
  cursor: pointer;

  ${({ type }) => {
    if (!type) return

    return type === 'back'
      ? `border-top-left-radius: .2rem;
      border-bottom-left-radius: .2rem;`
      : `border-top-right-radius: .2rem;
      border-bottom-right-radius: .2rem;`
  }} &:hover {
    background-color: darkgray;
  }

  &:disabled {
    cursor: default;
    color: gray;
  }
`

NavButton.displayName = 'StyledNavButton'

export default NavButton
