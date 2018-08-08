import styled from 'styled-components'
const NavButton = styled.a`
  width: 55px;
  height: 27px;
  opacity: 0.53;
  padding: 30px;
  font-family: Avenir;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-left: 120px;
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
NavButton.defaultName = 'StyledNavButton'

export default NavButton
