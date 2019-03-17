import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const AnswerBar = styled.section`
  margin: auto;
  text-align: center;
  ${styledMap('format', {
    [DESKTOP]: `
    width: 738px;
    padding-bottom:61px;`,
    [MOBILE]: `
    width: 325px;`,
    [TABLET]: `
    width: 708px;
    padding-bottom:61px;`
  })}
`
AnswerBar.displayName = 'AnswerBar'

export default AnswerBar
