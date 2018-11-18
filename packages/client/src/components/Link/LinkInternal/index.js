import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const LinkInternal = styled.span`
  color: #ffffff;
  cursor: pointer;
  font-family: Avenir, sans-serif;
  font-weight: 500;
  opacity: 0.53;

  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      font-size: 18px;
      height: 25px;
      margin-left: 140px;
      text-align: center;
      vertical-align: center;`,
    [`${MOBILE}Footer`]: `
      font-size: 15px;
      padding-top: 5px`,
    [`${MOBILE}Header`]: `
      width: 33px;
      line-height: 2.5;
      font-size: 15px;
      font-weight: 600;
      margin-right: 10px;
      margin-left: 30px;
      text-align: center;
      border-bottom: 2px solid transparent;`,
    [`${TABLET}Footer`]: `
      font-size: 15px;
      padding-top: 5px`
  })};
`
LinkInternal.displayName = 'StyledLinkInternal'

export default LinkInternal
