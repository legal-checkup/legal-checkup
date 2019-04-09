import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import styledMap from 'styled-map'

const Block = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  border-bottom: 5px solid #b62645;
  border-radius: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  padding: 0 40px;

  ${styledMap('format', {
    [DESKTOP]: `
    width:738px;`,
    [MOBILE]: `
    width: 100%;
    padding: 0 20px;
    `,
    [TABLET]: `
    width:708px;`
  })}
`
Block.displayName = 'Block'

export default Block
