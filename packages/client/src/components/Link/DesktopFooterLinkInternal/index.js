import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const DesktopFooterLinkInternal = styled.a`
  height: 25px;
  margin-left: 140px;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  vertical-align: center;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`
DesktopFooterLinkInternal.displayName = 'StyledDesktopFooterLinkInternal'

function mapDispatchToProps (dispatch, { to }) {
  return {
    onClick: e => {
      e.preventDefault()
      dispatch(push(to))
    }
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(DesktopFooterLinkInternal)
