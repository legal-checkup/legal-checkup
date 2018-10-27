import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { getPathname } from '../../state/selectors'

function mapStateToProps (state, { href }) {
  const currentPath = getPathname(state)

  return {
    isCurrentPage: href === currentPath
  }
}

function mapDispatchToProps (dispatch, { href }) {
  return {
    onClick: event => {
      event.preventDefault()

      dispatch(push(href))
    }
  }
}

function mergeProps ({ isCurrentPage }, { onClick }, ownProps = {}) {
  return isCurrentPage
    ? {
      isCurrentPage,
      ...ownProps
    }
    : {
      isCurrentPage,
      onClick,
      ...ownProps
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
