import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import LinkInternal from './LinkInternal'

function mapDispatchToProps (dispatch, { to }) {
  return {
    onClick: e => {
      e.preventDefault()

      dispatch(push(to))
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(LinkInternal)
