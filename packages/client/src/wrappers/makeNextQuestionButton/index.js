import { connect } from 'react-redux'

import { nextQuestionRequested } from '../../state/actions'
import { checkNextQuestionEnabled } from '../../state/selectors'

function mapStateToProps (state, { children }) {
  return {
    children: children || String.fromCharCode(9654),
    enabled: checkNextQuestionEnabled(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: () => dispatch(nextQuestionRequested())
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
