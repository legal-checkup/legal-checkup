import styled from 'styled-components'

// const Header = styled.div`
//   display: flex;
//   fex-direction: horizontal;
//   justify-content: space-between;
//   align-items: center;
//   background-color: rgb(249, 249, 242);
//   padding: 10px;
// `

const h1 = styled.div`
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
`
const Header = styled.header`
  width: 1440px;
  height: 100px;
  background-color: #202020;
`
Header.defaultName = 'StyledHeader'

export default Header
