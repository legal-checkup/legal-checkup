import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../constants'
import styledMap from 'styled-map'

const BarBottom = styled.section`
  margin: auto;
  text-align: center;
  background-color: #ffffff;
  ${styledMap('format', {
    [DESKTOP]: `
    width: 738px;
    padding-bottom: 105px;`,
    [MOBILE]: `
    width: 325px;
    padding-bottom: 20px;`,
    [TABLET]: `
    width: 708px;
    padding-bottom: 105px;`
  })}
`
BarBottom.displayName = 'StyledBar'

export default BarBottom
