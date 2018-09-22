import { checkPreviousQuestionEnabled } from '@state/selectors'
import { connect } from 'react-redux'
import { previousQuestionRequested } from '@state/actions'

function mapStateToProps (state) {
  return {
    children: String.fromCharCode(9664),
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)
