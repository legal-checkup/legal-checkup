import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const LinkInternal = styled.span`
  color: #ffffff;
  cursor: pointer;
  font-family: 'Museo Sans Cyrl 500';
  font-weight: 500;
  text-align: center;

  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      font-size: 18px;
      opacity: 0.6;
      height: 25px;
      margin-left: 140px;`,
    [`${MOBILE}Footer`]: `
      font-size: 15px;
      opacity: 0.5;
      height: 18px;
      padding-top: 13px`,
    [`${MOBILE}Header`]: `
      width: 33px;
      line-height: 2.5;
      font-size: 15px;
      font-weight: 600;
      opacity: 0.5;
      margin-right: 10px;
      margin-left: 30px;
      border-bottom: 2px solid transparent;`,
    [`${TABLET}Footer`]: `
      font-size: 15px;
      opacity: 0.6;
      height: 22px;
      margin-left: 96px;
      `
  })};
`
LinkInternal.displayName = 'LinkInternal'

export default LinkInternal
