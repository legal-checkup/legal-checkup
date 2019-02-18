import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'

const Wrapper = styled.div`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  background-color: #ffffff;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 0px auto;
  ${styledMap('format', {
    [DESKTOP]: `
  font-size: 32px;
  line-height: normal;
  padding-top: 58px;
  padding-left: 40px;
  padding-right: 40px;`,
    [MOBILE]: `
  font-size: 25px;
  line-height: 1.2;
  padding-top: 12px;
  padding-left: 20px;
  padding-right: 20px;`,
    [TABLET]: `
  width: 630px;
  font-size: 32px;
  line-height: normal;
  padding-top: 58px;
  padding-left: 40px;
  padding-right: 40px;`
  })}
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
