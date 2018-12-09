import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import {
  getLinkColor,
  getLinkBorder,
  getLinkBackgroundColor,
  getLinkFontWeight
} from './utilities'

const LinkInternal = styled.span`
  color: ${getLinkColor};
  border-bottom: ${getLinkBorder};
  background-color: ${getLinkBackgroundColor};
  cursor: ${styledMap`
    active: default;
    default: pointer;
  `};
  font-family: 'Museo Sans Cyrl', sans-serif;
  font-weight: ${getLinkFontWeight};

  ${({ format }) =>
    format === `${DESKTOP}Footer` ? 'margin-right: 120px;' : null}

  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      font-size: 18px;
      height: 25px;
      margin-left: 140px;
      text-align: center;
      vertical-align: center;
      opacity: 0.5;
      `,
    [`${TABLET}Footer`]: `
      font-size: 15px;
      padding-top: 5px;
      opacity: 0.5;
      `,
    [`${MOBILE}Footer`]: `
      font-size: 15px;
      padding-top: 5px;
      opacity: 0.5;
      `,
    [`${DESKTOP}Header`]: `
      font-size: 20px;
      margin-right: 120px;
    `,
    [`${TABLET}Header`]: `
      font-size: 18px;
      margin-right: 60px;
    `,
    [`${MOBILE}Header`]: `
      line-height: 1;
      font-size: 15px;
      border-radius: 5px 5px 0 0;
      display: inline-block;
      width: -webkit-fill-available;
      text-align: center;
      padding: 12px 0 11px 0;
    `
  })};
`
LinkInternal.displayName = 'StyledLinkInternal'

export default LinkInternal
