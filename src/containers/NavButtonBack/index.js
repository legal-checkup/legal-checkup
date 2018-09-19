import StyledNavButtonBack from '../../components/styled/NavButton/Back'
import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import { connect } from 'react-redux'
import { getActiveQuestion } from '../../state/selectors'
import { questionSelected } from '../../state/actions'

function isGreaterThanOne (activeQuestion) {
  return activeQuestion > 1
}

function previousQuestion (activeQuestion) {
  return activeQuestion - 1
}

function mapStateToProps (state) {
  return {
    unlocked: isGreaterThanOne(getActiveQuestion(state)),
    navigateToQuestion: previousQuestion(getActiveQuestion(state))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: question => () => dispatch(questionSelected(question))
  }
}

const ConnectedNavButtonBack = connect(mapStateToProps, mapDispatchToProps)(
  WithOnClickIfUnlocked(StyledNavButtonBack)
)

ConnectedNavButtonBack.displayName = 'ConnectedNavButtonBack'

export default ConnectedNavButtonBack
