import styled from 'styled-components'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const MobileFooterLink = styled.a`
  padding-top: 5px;
  opacity: 0.53;
  font-family: Avenir;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
`
MobileFooterLink.displayName = 'StyledMobileFooterLink'

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
)(MobileFooterLink)
