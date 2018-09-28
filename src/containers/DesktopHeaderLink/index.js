import { connect } from 'react-redux'

import { StyledDesktopHeaderLink } from '@containers/DesktopHeader/style'
import { getRouterLocation } from '@state/selectors'
import makeActiveDesktopHeaderLink from '@wrappers/makeActiveDesktopHeaderLink'

function mapStateToProps (state) {
  const { pathname } = getRouterLocation(state)
  console.log(pathname)

  return {
    pathname: pathname
  }
}

const connectedHeaderLink = connect(mapStateToProps)(StyledDesktopHeaderLink)

const HeaderLinkWithActive = makeActiveDesktopHeaderLink(connectedHeaderLink)

export default HeaderLinkWithActive
