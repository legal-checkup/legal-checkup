import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const LinkExternal = styled.a`
  text-decoration: none;
  font-family: 'Museo Sans Cyrl 500';
  
  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
      opacity: 0.6;
      height: 25px;
    `,
    [`${DESKTOP}Section`]: `
      border-radius: 5px;
      border: solid 3px #ffffff;
      font-size: 16px;
      font-weight: 900;
      opacity: 0.5;
      height: 58px;
      width: 450px;
    `,
    [`${MOBILE}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.5;
      height: 18px;
    `,
    [`${MOBILE}Section`]: `
      border-radius: 5px;
      border: solid 3px #ffffff;
      font-size: 16px;
      font-weight: 900;
      opacity: 0.5;
      height: 58px;
      width: 260px;
    `,
    [`${TABLET}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.6;
      height: 25px;
    `,
    [`${TABLET}Section`]: `
      border-radius: 5px;
      border: solid 3px #ffffff;
      font-size: 16px;
      font-weight: 900;
      opacity: 0.5;
      height: 58px;
      width: 260px;
    `
  })};
`
LinkExternal.displayName = 'LinkExternal'

export default LinkExternal
