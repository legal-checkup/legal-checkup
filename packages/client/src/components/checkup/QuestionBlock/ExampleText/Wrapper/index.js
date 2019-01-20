import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'

const Wrapper = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  font-family: "Museo Sans Cyrl 500", sans-serif;
  padding-top: 9px;
  text-align: center;
  color: #9b9b9b;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  ${styledMap('format', {
    [DESKTOP]: `
    width: 440px;
    padding-left: 149px;
    padding-right: 149px;
    padding-bottom:35px;
    font-size: 20px;`,
    [MOBILE]: `
    width: 325px;;
    font-size: 16px;`,
    [TABLET]: `
    width: 410px;
    padding-left: 149px;
    padding-right: 149px;
    padding-bottom:35px;
    font-size: 20px;`
  })}
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
