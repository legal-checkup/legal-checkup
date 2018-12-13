import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const Footer = styled.div`
  background-color: #202020;
  border-top: 7px solid #444141;

  ${styledMap('format', {
    [DESKTOP]: `
      display: flex;
      height: 100px;
      justify-content: center;
      align-items: center;`,
    [MOBILE]: `
      display: flex;
      height: 130px;
      justify-content: center;
      align-items: center;
      flex-direction: column;`,
    [TABLET]: `
      display: flex;
      height: 130px;
      justify-content: center;
      align-items: center;`
  })}
  
`
Footer.displayName = 'Footer'

export default Footer
