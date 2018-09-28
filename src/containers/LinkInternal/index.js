import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import StyledLinkInternal from '@components/styled/LinkInternal'

function mapDispatchToProps (dispatch, { to }) {
  return {
    onClick: e => {
      e.preventDefault()

      dispatch(push(to))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StyledLinkInternal)
