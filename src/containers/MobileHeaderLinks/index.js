import { connect } from 'react-redux'

import {
  StyledDesktopHeaderLink,
  StyledDesktopHeaderLogo
} from '@components/styled/MobileHeader'
import { getPathname } from '@state/selectors'
import makeDesktopHeaderLink from '@wrappers/makeDesktopHeaderLink'

function mapStateToProps (state) {
  return {
    pathname: getPathname(state)
  }
}

const DesktopHeaderNavLink = connect(mapStateToProps)(
  makeDesktopHeaderLink(StyledDesktopHeaderLink)
)

const DesktopHeaderLogoLink = connect(mapStateToProps)(
  makeDesktopHeaderLink(StyledDesktopHeaderLogo)
)

export { mapStateToProps, DesktopHeaderNavLink, DesktopHeaderLogoLink }
