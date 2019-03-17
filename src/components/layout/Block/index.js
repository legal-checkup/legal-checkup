import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import styledMap from 'styled-map'

const Block = styled.div`
  margin: auto;
  background-color: #ffffff;
  border-bottom-width: 5px;
  border-bottom: 5px solid #b62645;
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.12);

  ${styledMap('format', {
    [DESKTOP]: `
    width:738px;`,
    [MOBILE]: `
    width: 100%;`,
    [TABLET]: `
    width:708px;`
  })}
`
Block.displayName = 'Block'

export default Block
