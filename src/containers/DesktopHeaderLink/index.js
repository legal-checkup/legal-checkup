import { connect } from 'react-redux'

import { StyledDesktopHeaderLink } from '@containers/DesktopHeader/style'
import { getPathname } from '@state/selectors'
import makeDesktopHeaderLink from '@wrappers/makeDesktopHeaderLink'

function mapStateToProps (state) {
  console.log(state)
  return {
    pathname: getPathname(state)
  }
}

const HeaderLink = makeDesktopHeaderLink(StyledDesktopHeaderLink)

export { mapStateToProps }
export default connect(mapStateToProps)(HeaderLink)
