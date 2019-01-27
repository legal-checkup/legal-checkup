import * as React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { isNotEmpty, isNotUndefined } from 'ramda-adjunct'

import { getPathname } from '../../state/selectors'

import LinkExternal from './LinkExternal'
import LinkInternal from './LinkInternal'

import { externalLink, internalLink } from '../../constants'

function Link ({ children, format, href, onClick, target, tip }) {
  if (isNotEmpty(href)) {
    return (
      <LinkExternal
        href={href}
        title={tip}
        format={format}
        target={target}
        data-testid={externalLink}
      >
        {children}
      </LinkExternal>
    )
  }

  return isNotUndefined(onClick) ? (
    <LinkInternal
      title={tip}
      format={format}
      onClick={onClick}
      data-testid={internalLink}
    >
      {children}
    </LinkInternal>
  ) : (
    <LinkInternal
      title={'This page'}
      format={format}
      active
      data-testid={internalLink}
    >
      {children}
    </LinkInternal>
  )
}

const makeLinkExternal = Component => {
  return ({ href, tip, target = '_blank', children, format }) => (
    <Component href={href} title={tip} target={target} format={format}>
      {children}
    </Component>
  )
}

const makeLinkInternal = Component => {
  return connect(
    null,
    mapDispatchToProps
  )(Component)
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

  const altProps = pathname === to ? { active: true } : { onClick }

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

export { makeLinkInternal, makeLinkExternal }
