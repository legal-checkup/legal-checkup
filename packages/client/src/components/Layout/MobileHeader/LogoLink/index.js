import { connect } from 'react-redux'

import styled, { css } from 'styled-components'

import { getPathname } from '../../../../state/selectors'
import makeDesktopHeaderLink from '../../../../wrappers/makeDesktopHeaderLink'

const Logo = styled.div`
  border-radius: 5px;
  background-color: #474747;
  opacity: 0.39;
  font-family: Avenir, sans-serif;
  font-size: 10px;
  margin-bottom: 8px;
  margin-top: -28px;
  margin-left: 5px;
  width: 32px;
  height: 35px;
  object-fit: contain;
  color: #ffffff;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      cursor: default;
    `};
`
Logo.displayName = 'Logo'

function mapStateToProps (state) {
  return {
    pathname: getPathname(state)
  }
}

export default connect(mapStateToProps)(makeDesktopHeaderLink(Logo))
