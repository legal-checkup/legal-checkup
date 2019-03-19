import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET, FOREGROUND_LINK } from '../../../constants'

const LinkExternal = styled.a`
  text-decoration: none;
  font-family: 'Museo Sans Cyrl 500';
  color: ${FOREGROUND_LINK};

  ${styledMap('format', {
    [`${DESKTOP}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
      opacity: 0.6;
      height: 25px;
    `,
    [`${TABLET}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.6;
      height: 25px;
    `,
    [`${MOBILE}Footer`]: `
      color: #ffffff;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      opacity: 0.5;
      height: 18px;
    `,

    [`DEFAULT`]: `
    `
  })};
`
LinkExternal.displayName = 'LinkExternal'

export default LinkExternal
