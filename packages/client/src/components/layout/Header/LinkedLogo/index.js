import * as React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { isNotUndefined } from 'ramda-adjunct'

import { getPathname } from '../../../../state/selectors'

import Logo from './Logo'
import Placeholder from './Placeholder'

function LinkedLogo ({ children, format, href, onClick, target, tip }) {
  return isNotUndefined(onClick)
    ? <Logo title='To the home page' onClick={onClick}>{children}</Logo>
    : <Placeholder format={format}>{children}</Placeholder>
}

function mapStateToProps (state) {
  return {
    pathname: getPathname(state)
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

function mergeProps ({ pathname }, { onClick }, { children, to }) {
  return pathname === to
    ? {
      children
    }
    : {
      children,
      onClick
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LinkedLogo)
