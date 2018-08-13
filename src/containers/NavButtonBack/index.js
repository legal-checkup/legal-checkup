import { connect } from 'react-redux'

import WithOnClickIfUnlocked from '../../components/WithOnClickIfUnlocked'
import StyledNavButtonBack from '../../components/styled/NavButton/Back'
import { getActiveQuestion, previousQuestion } from '../../state'

function mapStateToProps (state) {
  return {
    unlocked: getActiveQuestion(state) > 1
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(previousQuestion())
  }
}

const ConnectedNavButtonBack = connect(mapStateToProps, mapDispatchToProps)(
  WithOnClickIfUnlocked(StyledNavButtonBack)
)

ConnectedNavButtonBack.displayName = 'ConnectedNavButtonBack'

export default ConnectedNavButtonBack
