import { getActiveQuestion, getResponsesCount } from '../../state/selectors'

import StyledNavButtonForward from '../../components/styled/NavButton/Forward'
import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import { connect } from 'react-redux'
import { questionSelected } from '../../state/actions'

function isLessThanUnlockedQuestion (activeQuesiton, unlockedQuestion) {
  return activeQuesiton < unlockedQuestion
}

function nextQuestion (activeQuestion) {
  return activeQuestion + 1
}

function mapStateToProps (state) {
  return {
    unlocked: isLessThanUnlockedQuestion(
      getActiveQuestion(state),
      getResponsesCount(state) + 1
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
