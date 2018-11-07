import { connect } from 'react-redux'

import {
  StyledMobileHeaderLink,
  StyledMobileHeaderLogo
} from '@components/styled/MobileHeader'
import { getPathname } from '@state/selectors'
import makeDesktopHeaderLink from '@wrappers/makeDesktopHeaderLink'

function mapStateToProps (state) {
  return {
    pathname: getPathname(state)
  }
}

const MobileHeaderNavLink = connect(mapStateToProps)(
  makeDesktopHeaderLink(StyledMobileHeaderLink)
)

const MobileHeaderLogoLink = connect(mapStateToProps)(
  makeDesktopHeaderLink(StyledMobileHeaderLogo)
)

export { mapStateToProps, MobileHeaderNavLink, MobileHeaderLogoLink }
