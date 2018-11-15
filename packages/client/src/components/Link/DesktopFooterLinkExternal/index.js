import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const DesktopFooterLinkExternal = styled.a`
  height: 25px;
  margin-left: 23%;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`
DesktopFooterLinkExternal.displayName = 'DesktopFooterLinkExternal'

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
)(DesktopFooterLinkExternal)
