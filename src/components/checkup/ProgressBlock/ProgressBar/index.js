import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const ProgressBar = styled.nav`
  background-color: #eeedea;
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  flex-basis: fit-content;
  flex-shrink: 1;
  text-align: center;
  margin: 0 auto;
  padding-top: 90px;

  ${styledMap('format', {
    [DESKTOP]: ``,
    [MOBILE]: ``,
    [TABLET]: ``
  })}
`

ProgressBar.displayName = 'ProgressBar'

export default ProgressBar
