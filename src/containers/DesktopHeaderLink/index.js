import { connect } from 'react-redux'
import React from 'react'

import { StyledDesktopHeaderLink } from '@containers/DesktopHeader/style'
import { getRouterLocation } from '@state/selectors'
import makeDesktopHeaderLink from '@wrappers/makeDesktopHeaderLink'

const getPathname = ({ pathname = '' }) => pathname

function mapStateToProps (state) {
  return {
    pathname: getPathname(getRouterLocation(state))
  }
}

const HeaderLink = makeDesktopHeaderLink(StyledDesktopHeaderLink)

const ConnectedHeaderLink = connect(mapStateToProps)(HeaderLink)

export { getPathname, mapStateToProps }
export default ConnectedHeaderLink
