import { connect } from 'react-redux'

import { previousQuestionRequested } from '../../state/actions'
import { checkPreviousQuestionEnabled } from '../../state/selectors'

function mapStateToProps (state, { children }) {
  return {
    children: children || String.fromCharCode(9664),
    enabled: checkPreviousQuestionEnabled(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: () => dispatch(previousQuestionRequested())
  }
}

function mergeProps (stateProps, dispatchProps) {
  return stateProps.enabled
    ? {
      ...stateProps,
      ...dispatchProps
    }
    : stateProps
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
