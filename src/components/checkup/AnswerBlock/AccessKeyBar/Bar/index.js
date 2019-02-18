import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'

const Bar = styled.section`
  ${styledMap('format', {
    [DESKTOP]: `
      width: 738px;
      margin: auto;
      padding-top: 15px;
      text-align: center;
      background-color: #ffffff;
    `,
    [MOBILE]: ``,
    [TABLET]: `
      width: 708px;
      margin: auto;
      padding-top: 15px;
      text-align: center;
      background-color: #ffffff;
    `
  })}
`
Bar.displayName = 'Bar'

export default Bar
