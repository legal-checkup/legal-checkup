import styled from 'styled-components'
import styledMap from 'styled-map'

import { MOBILE, TABLET, DESKTOP } from '../../../../../constants'

const Logo = styled.div`
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};

  ${styledMap('format', {
    [`${DESKTOP}`]: `
      height: 70px;
      width: 70px;
    `,
    [`${TABLET}`]: `
      height: 52px;
      width: 52px;
    `,
    [`${MOBILE}`]: `
      height: 32px;
      width: 32px;
    `
  })};
`
Logo.displayName = 'Logo'

export default Logo
