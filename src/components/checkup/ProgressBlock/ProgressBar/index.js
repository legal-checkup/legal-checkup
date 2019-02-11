import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const ProgressBar = styled.nav`
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  ${styledMap('format', {
    [DESKTOP]: ``,
    [MOBILE]: ``,
    [TABLET]: ``
  })}

`

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
