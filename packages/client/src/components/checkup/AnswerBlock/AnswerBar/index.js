import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const AnswerBar = styled.section`
  margin: auto;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
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
