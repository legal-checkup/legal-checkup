import styled from 'styled-components'
import styledMap from 'styled-map'
import { contains } from 'ramda'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

function chooseColor (format, active) {
  return contains('Header', format) && active ? '#b62645' : '#fff'
}

function chooseBorder (format, active) {
  return (format === `${DESKTOP}Header` && active) ||
    (format === `${TABLET}Header` && active)
    ? '2px solid #b62645'
    : '2px solid transparent'
}

function chooseBackgroundColor (format, active) {
  return format === `${MOBILE}Header` && active ? '#eeedea' : null
}

const LinkInternal = styled.span`
  color: ${({ format, active }) => chooseColor(format, active)};
  border-bottom: ${({ format, active }) => chooseBorder(format, active)};
  background-color: ${({ format, active }) => chooseBackgroundColor(format, active)};
  cursor: ${styledMap`
    active: default;
    default: pointer;
  `};
  font-family: 'Museo Sans Cyrl', sans-serif;

  ${({ format }) => (format === `${DESKTOP}Footer` ? 'margin-right: 120px;' : null)}

  ${styledMap('format', { [`${DESKTOP}Footer`]: `
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
      padding: 9px 14px 14px 14px;
      border-radius: 5px 5px 0 0;
      display: inline-block;
      font-weight: 900;
    ` })};
`
LinkInternal.displayName = 'StyledLinkInternal'

export default LinkInternal
