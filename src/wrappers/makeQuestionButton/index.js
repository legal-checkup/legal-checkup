import { checkCurrentQuestionEnabled } from '@state/selectors'
import { connect } from 'react-redux'
import { questionRequested } from '@state/actions'

function mapStateToProps (state, { children, questionIndex }) {
  return {
    children: children || questionIndex,
    enabled: checkCurrentQuestionEnabled(state, questionIndex)
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
