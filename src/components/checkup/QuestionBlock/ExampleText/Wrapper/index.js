import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'

const Wrapper = styled.div`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  padding-top: 9px;
  text-align: center;
  color: #9b9b9b;
  ${styledMap('format', {
    [DESKTOP]: `
    padding: 18px 0 35px 0;    
    font-size: 20px;`,
    [MOBILE]: `
    width: 285px;
    padding: 20px;
    font-size: 16px;`,
    [TABLET]: `
    padding: 18px 0 35px 0;
    font-size: 20px;`,
  })}
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
