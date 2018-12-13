import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const FooterBlock = styled.div`
  background-color: #202020;
  border-top: 7px solid #444141;
  ${styledMap('format', {
    [DESKTOP]: `
      bottom: 0px;
      height: 100px;
      line-height: 100px;
      position: absolute;
      width: 100%;`,
    [MOBILE]: `
      display: flex;
      flex-direction: column;
      height: 130px;
      justify-content: center;
      text-align: center`,
    [TABLET]: `
      display: flex;
      flex-direction: column;
      height: 130px;
      justify-content: center;
      text-align: center`
  })}
  
`
FooterBlock.displayName = 'FooterBlock'

export default FooterBlock
