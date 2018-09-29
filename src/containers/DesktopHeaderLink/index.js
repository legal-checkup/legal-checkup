import { connect } from 'react-redux'

import { StyledDesktopHeaderLink } from '@containers/DesktopHeader/style'
import { getRouterLocation } from '@state/selectors'
import makeDesktopHeaderLink from '@wrappers/makeDesktopHeaderLink'

function mapStateToProps (state) {
  const { pathname } = getRouterLocation(state)
  console.log(pathname)

  return {
    pathname
  }
}

const HeaderLink = makeDesktopHeaderLink(StyledDesktopHeaderLink)

const ConnectedHeaderLink = connect(mapStateToProps)(HeaderLink)

export default ConnectedHeaderLink
