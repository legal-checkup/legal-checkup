import { connect } from 'react-redux'

function mapStateToProps (state, { children }) {
  return {
    children: children,
    active: undefined
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClick: () => dispatch()
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
