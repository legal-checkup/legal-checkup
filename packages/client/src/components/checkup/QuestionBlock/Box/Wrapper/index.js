import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'

const Wrapper = styled.div`
  font-family: MuseoSans;
  background-color: #ffffff;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 0px auto;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  ${styledMap('format', {
    [DESKTOP]: `
  width: 658px;
  height:76px;
  font-size: 32px;
  line-height: normal;
  padding:58px 40px 60px;`,
    [MOBILE]: `
  width: 285px;
  height:76px;
  font-size: 25px;
  line-height: 1.2;
  padding:58px 20px 60px;`,
    [TABLET]: `
  width: 630px;
  height:95px;
  font-size: 32px;
  line-height: normal;
  padding:45px 40px 90px;`
  })}
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
