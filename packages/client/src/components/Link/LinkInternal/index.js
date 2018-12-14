import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const LinkInternal = styled.span`
  color: #ffffff;
  cursor: pointer;
  font-family: 'Museo Sans Cyrl 500';
  font-weight: 500;
  opacity: 0.5;
  text-align: center;

  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      font-size: 18px;
      height: 25px;
      margin-left: 140px;`,
    [`${MOBILE}Footer`]: `
      font-size: 15px;
      height: 25px;
      padding-top: 5px`,
    [`${MOBILE}Header`]: `
      width: 33px;
      line-height: 2.5;
      font-size: 15px;
      font-weight: 600;
      margin-right: 10px;
      margin-left: 30px;
      border-bottom: 2px solid transparent;`,
    [`${TABLET}Footer`]: `
      font-size: 15px;
      height: 25px;
      margin-left: 96px;
      `
  })};
`
LinkInternal.displayName = 'LinkInternal'

export default LinkInternal
