import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'

const Bar = styled.section`
  ${styledMap('format', {
    [DESKTOP]: `
      margin: 0 auto;
      padding-top: 15px;
      text-align: center;
    `,
    [MOBILE]: ``,
    [TABLET]: `
      margin: 0 auto;
      padding-top: 15px;
      text-align: center;
    `
  })}
`
Bar.displayName = 'Bar'

export default Bar
