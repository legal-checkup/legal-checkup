import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../constants'
import styledMap from 'styled-map'

const Bar = styled.section`
  margin: auto;
  text-align: center;
  background-color: #ffffff;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: #b62645;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  ${styledMap('format', {
    [DESKTOP]: `
    width: 738px;
    padding-bottom:61px;`,
    [MOBILE]: `
    width: 325px;`,
    [TABLET]: `
    width: 708px;
    padding-bottom:61px;`
  })}
`
Bar.displayName = 'StyledBar'

export default Bar
