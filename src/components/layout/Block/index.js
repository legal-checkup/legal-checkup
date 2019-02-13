import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import styledMap from 'styled-map'

const Block = styled.div`
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-color: #b62645;
  ${styledMap('format', {
    [DESKTOP]: `
    width:738px;`,
    [MOBILE]: `
    width:325px;`,
    [TABLET]: `
    width:708px;`
  })}
`
Block.displayName = 'Block'

export default Block
