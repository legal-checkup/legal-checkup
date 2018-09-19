import { connect } from 'react-redux'

import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import StyledNavButtonForward from '../../components/styled/NavButton/Forward'
import {
  getActiveQuestion,
  getQuestionsCount,
  getResponsesCount,
  questionSelected
} from '../../state'

function isNextQuestionUnlocked (
  activeQuestion,
  unlockedQuestion,
  questionCount
) {
  return activeQuestion < unlockedQuestion && activeQuestion !== questionCount
}

function nextQuestion (activeQuestion) {
  return activeQuestion + 1
}

function mapStateToProps (state) {
  return {
    unlocked: isNextQuestionUnlocked(
      getActiveQuestion(state),
      getResponsesCount(state) + 1,
      getQuestionsCount(state)
    ),
    navigateToQuestion: nextQuestion(getActiveQuestion(state))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: question => () => dispatch(questionSelected(question))
  }
}

const ConnectedNavButtonForward = connect(mapStateToProps, mapDispatchToProps)(
  WithOnClickIfUnlocked(StyledNavButtonForward)
)

ConnectedNavButtonForward.displayName = 'ConnectNavButtonForward'

export default ConnectedNavButtonForward
