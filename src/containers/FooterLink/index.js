import StyledDesktopFooterLink from '@components/styled/DesktopFooterLink'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import makeDesktopFooterLink from '@wrappers/makeDesktopFooterLink'

function mapDispatchToProps (dispatch, { to }) {
  return {
    onClick: e => {
      e.preventDefault()

      dispatch(push(to))
    }
  }
}

const footerLink = makeDesktopFooterLink(StyledDesktopFooterLink)

export default connect(
  undefined,
  mapDispatchToProps
)(footerLink)
