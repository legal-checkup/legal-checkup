import { getActiveQuestionIndex, getQuestionCount } from '@state/selectors'

import QuestionCounter from '@components/QuestionCounter'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    activeQuestionIndex: getActiveQuestionIndex(state),
    questionCount: getQuestionCount(state)
  }
}

export default connect(mapStateToProps)(QuestionCounter)
