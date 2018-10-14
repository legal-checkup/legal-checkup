import { makeCheckQuestionEnabled } from '@state/selectors'
import { connect } from 'react-redux'
import { questionRequested } from '@state/actions'

function makeMapStateToProps () {
  const checkQuestionEnabled = makeCheckQuestionEnabled()
  return function mapStateToProps (state, { children, questionIndex }) {
    return {
      children: children || questionIndex,
      enabled: checkQuestionEnabled(state, questionIndex)
    }
  }
}

function mapDispatchToProps (dispatch, { questionIndex }) {
  return {
    onClick: () => dispatch(questionRequested(questionIndex))
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
  makeMapStateToProps,
  mapDispatchToProps,
  mergeProps
)
