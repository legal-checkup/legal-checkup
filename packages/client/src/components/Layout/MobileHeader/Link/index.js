import { connect } from 'react-redux'

import styled, { css } from 'styled-components'

import { getPathname } from '../../../../state/selectors'
import makeDesktopHeaderLink from '../../../../wrappers/makeDesktopHeaderLink'

const Link = styled.div`
  font-family: Avenir, sans-serif;
  width: 33px;
  line-height: 2.5;
  letter-spacing: normal;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  display: inline;
  margin-right: 10px;
  margin-left: 30px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  ${props =>
    props.active &&
    css`
      cursor: default;
      color: #b62645;
      background-color: #eeedea;
      width: 100px;
      padding-left: 8px;
      padding-bottom: 15px;
      padding-top: 8px;
      padding-right: 8px;
      border-radius: 4px;
    `};
`
Link.displayName = 'Link'

function mapStateToProps (state) {
  return {
    pathname: getPathname(state)
  }
}

export default connect(mapStateToProps)(makeDesktopHeaderLink(Link))
