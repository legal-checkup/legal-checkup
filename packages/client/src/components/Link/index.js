import * as React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { isNotEmpty, isNotUndefined } from 'ramda-adjunct'

import { getPathname } from '../../state/selectors'

import LinkExternal from './LinkExternal'
import LinkInternal from './LinkInternal'
import Placeholder from './Placeholder'

function Link ({ children, format, href, onClick, target, tip }) {
  if (isNotEmpty(href)) {
    return <LinkExternal
      href={href}
      title={tip}
      format={format}
      target={target}
    >{children}</LinkExternal>
  }

  return isNotUndefined(onClick)
    ? <LinkInternal title={tip} format={format} onClick={onClick}>{children}</LinkInternal>
    : <Placeholder title='This page' format={format}>{children}</Placeholder>
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

function mergeProps ({ pathname }, { onClick }, ownProps) {
  const { children, format, href = '', target = '_blank', tip, to } = ownProps

  const altProps = pathname === to ? {} : { onClick }

  return {
    children,
    format,
    href,
    ...altProps,
    target,
    tip
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Link)
