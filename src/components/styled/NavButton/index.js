import styled from 'styled-components'

const NavButton = styled.button`
  background: gainsboro;
  padding: 0.5rem 1.5rem;
  border: 0;
  outline: none;

  ${({ type }) => {
    if (type === 'back') {
      return `
        border-top-left-radius: .2rem;
        border-bottom-left-radius: .2rem;
      `
    }

    if (type === 'forward') {
      return `
        border-top-right-radius: .2rem;
        border-bottom-right-radius: .2rem;
      `
    }
  }} ${({ disabled }) => {
  return disabled
    ? `color: gray;`
    : `
      color: black;
      cursor: pointer;
      &:hover {
        background-color: darkgray;
      }`
}};
`

NavButton.displayName = 'StyledNavButton'

export default NavButton
