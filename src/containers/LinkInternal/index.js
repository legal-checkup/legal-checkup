import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import StyledLinkInternal from '@components/styled/LinkInternal'
import { getRouterLocation } from '@state/selectors'

function mapStateToProps (state) {
  const { pathname } = getRouterLocation(state)
  console.log(getRouterLocation(state))

  return {
    pathname: pathname
  }
}

function mapDispatchToProps (dispatch, { to }) {
  return {
    onClick: e => {
      e.preventDefault()

      dispatch(push(to))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledLinkInternal)
