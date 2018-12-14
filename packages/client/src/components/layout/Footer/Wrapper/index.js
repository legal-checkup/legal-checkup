import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const Footer = styled.div`
  background-color: #202020;
  border-top: 7px solid #444141;
  display: flex;
  justify-content: center;
  align-items: center;

  ${styledMap('format', {
    [DESKTOP]: `
      height: 100px;`,
    [MOBILE]: `
      height: 130px;
      flex-direction: column;`,
    [TABLET]: `
      height: 130px;`
  })}
`
Footer.displayName = 'Footer'

export default Footer
