import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../constants'
import styledMap from 'styled-map'

const BarBottom = styled.section`
  ${styledMap('format', {
    [DESKTOP]: `
    width: 738px;
    margin: auto;
    padding-top: 15px;
    text-align: center;
    background-color: #ffffff;`,
    [MOBILE]: `
    width: 325px;`,
    [TABLET]: `
    width: 708px;
    margin: auto;
    padding-top: 15px;
    text-align: center;
    background-color: #ffffff;`
  })}
`
BarBottom.displayName = 'StyledBar'

export default BarBottom
