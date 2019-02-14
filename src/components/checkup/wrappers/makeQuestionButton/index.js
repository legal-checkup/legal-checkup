import { connect } from 'react-redux'

import { questionRequested } from '../../../../state/actions'
import { checkQuestionEnabled } from '../../../../state/selectors'

function mapStateToProps ({ checkup }, { children, questionIndex }) {
  return {
    children: children || questionIndex + 1,
    enabled: checkQuestionEnabled(questionIndex)(checkup)
  }
}

function mapDispatchToProps (dispatch, { questionIndex }) {
  return {
    onClick: () => dispatch(questionRequested(questionIndex))
  }
}

function mergeProps (stateProps, dispatchProps, { active }) {
  return stateProps.enabled
    ? {
      ...stateProps,
      ...dispatchProps,
      active
    }
    : stateProps
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)
