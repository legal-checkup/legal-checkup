import { connect } from 'react-redux'

import { QuestionCounter } from '../../components'
import { getActiveQuestion, getQuestions } from '../../state'

function mapStateToProps (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questions: getQuestions(state)
  }
}

export default connect(mapStateToProps)(QuestionCounter)
