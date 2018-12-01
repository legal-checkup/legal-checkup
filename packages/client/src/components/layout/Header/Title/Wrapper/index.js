import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, TABLET, MOBILE } from '../../../../../constants'

const Wrapper = styled.div`
  font-family: 'Museo Sans Cyrl', sans-serif;
  font-weight: 900;
  line-height: 1;

  ${styledMap('format', { [`${DESKTOP}`]: `
      margin-left: 10px;
      font-size: 36px;
    `,
  [`${TABLET}`]: `
      margin-left: 10px;
      font-size: 25px;
    `,
  [`${MOBILE}`]: `
      margin-left: 8px;
      font-size: 18px;
    ` })};
`
Wrapper.displayName = 'Wrapper'

export default Wrapper
