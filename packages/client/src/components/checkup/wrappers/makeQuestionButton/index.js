import { connect } from 'react-redux'

import { questionRequested } from '../../../../state/actions'
import { checkNextQuestionEnabled } from '../../../../state/selectors'

function mapStateToProps ({ checkup }, { children, questionIndex }) {
  return {
    children: children || questionIndex,
    enabled: checkNextQuestionEnabled(checkup)
  }
}

function mapDispatchToProps (dispatch, { questionIndex }) {
  return {
    onClick: dispatch(questionRequested(questionIndex))
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
