import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  ${styledMap('format', { [`${DESKTOP}`]: `
      margin-left: 20px;
    `,
  [`${TABLET}`]: `
      margin-left: 20px;
    `,
  [`${MOBILE}`]: `
      margin-left: 15px;
      height: 57px;
    ` })};
`
LogoWrapper.displayName = 'StyledLogoWrapper'

export default LogoWrapper
