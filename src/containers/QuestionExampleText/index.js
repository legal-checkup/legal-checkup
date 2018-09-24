import { connect } from 'react-redux'

import { getActiveQuestion } from '@state/selectors'
import StyledQuestionExampleText from '@components/styled/QuestionExampleText'

function mapStateToProps (state) {
  const { help: children } = getActiveQuestion(state)

  return {
    children
  }
}

export default connect(mapStateToProps)(StyledQuestionExampleText)
