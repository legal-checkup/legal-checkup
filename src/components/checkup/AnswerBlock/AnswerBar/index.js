import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const AnswerBar = styled.section`
  margin: auto;
  text-align: center;
  ${styledMap('format', {
    [DESKTOP]: `
    padding-bottom:61px;`,
    [TABLET]: `
    padding-bottom:61px;`,
    [MOBILE]: `
      margin-top: 26px;
    `
  })}
`
AnswerBar.displayName = 'AnswerBar'

export default AnswerBar
