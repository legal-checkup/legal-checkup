import styled from 'styled-components'
import { DESKTOP, TABLET, MOBILE } from '../../../constants'
import styledMap from 'styled-map'

const Grid = styled.section`
  margin: auto;
  padding: 30px;
  ${styledMap('format', {
    [DESKTOP]: `
      width: 920px;`,
    [MOBILE]: `
      width: 315px;`,
    [TABLET]: `
      width: 315px;`
  })}
`
Grid.displayName = 'Grid'

export default Grid
