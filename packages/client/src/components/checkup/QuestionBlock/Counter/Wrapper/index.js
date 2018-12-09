import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'

const Wrapper = styled.div`
  color: #b62645;
  width: 36px;
  height: 17px;
  font-family: MuseoSansCyrl;
  font-size: 13px;
  font-weight: 900;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 0px auto;
  padding-top: 18px;
  ${styledMap('format', {
    [DESKTOP]: `
   diplay:none;
    `,
    [MOBILE]: `
    
   `,
    [TABLET]: `
  display:none;
    `
  })}
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
