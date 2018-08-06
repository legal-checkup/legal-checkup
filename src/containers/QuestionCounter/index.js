import { connect } from 'react-redux'

import { QuestionCounter } from '../../components'
import { getActiveQuestion, getQuestions } from '../../state'

function mapStateToProps (state) {
  const activeQuestion = getActiveQuestion(state)
  const questions = getQuestions(state)

  return { activeQuestion, questions }
}

export default connect(mapStateToProps)(QuestionCounter)
