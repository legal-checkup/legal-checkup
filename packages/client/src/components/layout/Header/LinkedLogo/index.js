import * as React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { isNotUndefined } from 'ramda-adjunct'

import { getPathname } from '../../../../state/selectors'

import Logo from './Logo'

function LinkedLogo ({ children, format, onClick, to }) {
  if (isNotUndefined(onClick)) {
    return (
      <Logo title='To the home page' onClick={onClick} to={to} format={format}>
        {children}
      </Logo>
    )
  } else {
    return (
      <Logo title='This page' to={to} format={format} active>
        {children}
      </Logo>
    )
  }
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

function mergeProps ({ pathname }, { onClick }, { to, ...props }) {
  return pathname === to
    ? {
      ...props
    }
    : {
      onClick,
      ...props
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(LinkedLogo)
