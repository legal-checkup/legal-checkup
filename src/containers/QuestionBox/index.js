import { connect } from 'react-redux'

import { QuestionBox } from '../../components'
import { getActiveQuestion, getQuestions } from '../../state'

function mapStateToProps (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questions: getQuestions(state)
  }
}

export default connect(mapStateToProps)(QuestionBox)
