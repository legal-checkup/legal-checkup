import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const LinkExternal = styled.a`
  text-decoration: none;

  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-family: 'Museo Sans Cyrl', sans-serif;
      font-size: 18px;
      font-weight: 500;
      height: 25px;
      opacity: 0.53;
      text-align: center;
    `,
    [`${DESKTOP}Section`]: `
      border-radius: 5px;
      border: solid 3px #ffffff;
      font-size: 16px;
      font-weight: 900;
      height: 58px;
      text-decoration: none;
      width: 450px;
    `,
    [`${MOBILE}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-family: 'Museo Sans Cyrl', sans-serif;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.53;
      padding-top: 5px
    `,
    [`${MOBILE}Section`]: `
      border-radius: 5px;
      border: solid 3px #ffffff;
      font-size: 16px;
      font-weight: 900;
      height: 58px;
      text-decoration: none;
      width: 260px;
    `,
    [`${TABLET}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-family: 'Museo Sans Cyrl', sans-serif;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.53;
      padding-top: 5px
    `,
    [`${TABLET}Section`]: `
      border-radius: 5px;
      border: solid 3px #ffffff;
      font-size: 16px;
      font-weight: 900;
      height: 58px;
      text-decoration: none;
      width: 260px;
    `
  })};
`
LinkExternal.displayName = 'LinkExternal'

export default LinkExternal
