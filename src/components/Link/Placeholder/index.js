import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'

const Placeholder = styled.span`
  color: #ffffff;
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
      color: #b62645;
      background-color: #eeedea;
      width: 100px;
      padding: 8px 8px 15px;
      border-radius: 4px;`,
    [`${TABLET}Footer`]: `
      font-size: 15px;
      padding-top: 5px`
  })};
`

Placeholder.displayName = 'Placeholder'

export default Placeholder
