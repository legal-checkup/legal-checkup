import { connect } from 'react-redux'

import NavButton from '../../components/NavButton'
import {
  getActiveQuestion,
  getCount,
  nextQuestion,
  previousQuestion
} from '../../state'

function mapStateToProps (state, { direction }) {
  const activeQuestion = getActiveQuestion(state)
  const answeredQuestions = getCount(state)
  const unlocked =
    direction === 'back'
      ? activeQuestion > 1
      : direction === 'forward' ? activeQuestion < answeredQuestions + 1 : false

  return {
    unlocked
  }
}

function mapDispatchToProps (dispatch, { direction }) {
  const action =
    direction === 'back'
      ? previousQuestion()
      : direction === 'forward' ? nextQuestion() : {}

  return {
    handleClick: () => dispatch(action)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavButton)
