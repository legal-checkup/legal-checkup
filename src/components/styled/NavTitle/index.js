import styled from 'styled-components'
const NavTitle = styled.span`
  width: 156px;
  height: 54px;
  font-family: Avenir;
  font-size: 32px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.84;
  letter-spacing: normal;
  color: #8f8f8f;
  display: inline-block;
`

// const NavButton = styled.a`
//   color: red;
//   font-size: 16px;
//   border: none;
//   padding: 4px 10px;
//   background-color: rgb(219, 219, 212);
//   margin: 2px;
//   text-decoration: none;

//   &:hover {
//     color: white;
//     background-color: red;
//   }
// `
NavTitle.defaultName = 'StyledNavTitle'

export default NavTitle
