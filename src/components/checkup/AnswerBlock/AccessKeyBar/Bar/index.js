import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'

const Bar = styled.section`
  ${styledMap('format', {
    [DESKTOP]: `
      padding-top: 15px;
    `,
    [MOBILE]: ``,
    [TABLET]: `
      padding-top: 15px;
    `
  })}
`
Bar.displayName = 'Bar'

export default Bar
