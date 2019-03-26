import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const ProgressBar = styled.nav`
  background-color: #eeedea;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  letter-spacing: normal;
  text-align: center;
  margin: 0 auto;
  padding-top: 130px;
  position: relative;

  ${styledMap('format', {
    [DESKTOP]: ``,
    [MOBILE]: ``,
    [TABLET]: ``
  })}
`

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
