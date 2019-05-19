import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const Footer = styled.div`
  position: absolute;
  background-color: #202020;
  border-top: 7px solid #444141;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0
    ${styledMap('format', {
    [DESKTOP]: `
      height: 98px;`,
    [TABLET]: `
      height: 100px;`,
    [MOBILE]: `
      height: 135px;
      flex-direction: column;`
  })};
`
Footer.displayName = 'Footer'

export default Footer
