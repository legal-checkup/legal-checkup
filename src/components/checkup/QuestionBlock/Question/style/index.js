import styled from 'styled-components'
import posed from 'react-pose'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'

const Question = styled.div`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-weight: 500;
  text-align: center;
  margin: 0px auto;
  ${styledMap('format', {
    [DESKTOP]: `
  font-size: 32px;
  line-height: normal;
  padding-top: 58px;`,
    [MOBILE]: `
  font-size: 25px;
  line-height: 1.2;
  padding-top: 12px;`,
    [TABLET]: `
  font-size: 32px;
  line-height: normal;
  padding-top: 58px;`
  })}
`
Question.displayName = 'StyledQuestion'

const PosedQuestion = posed(Question)({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
})

export default PosedQuestion
