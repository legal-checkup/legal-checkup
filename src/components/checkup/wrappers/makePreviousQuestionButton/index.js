import { connect } from 'react-redux'

import { previousQuestionRequested } from '../../../../state/actions'
import { checkPreviousQuestionEnabled } from '../../../../state/selectors'

function mapStateToProps ({ checkup }, { children }) {
  return {
    children: children || String.fromCharCode(60),
    enabled: checkPreviousQuestionEnabled(checkup)
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
