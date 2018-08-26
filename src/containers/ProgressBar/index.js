import { connect } from 'react-redux'

import { ProgressBar } from '../../components'
import {
  getActiveQuestion,
  getQuestions,
  getResponses,
  questionSelected
} from '../../state'

function mapStateToProps (state) {
  return {
    activeQuestion: getActiveQuestion(state),
    questions: getQuestions(state),
    responses: getResponses(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: questionNumber => dispatch(questionSelected(questionNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
