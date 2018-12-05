import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../constants'
import styledMap from 'styled-map'
import { A } from '../../../../state/constants'

function setMarginRight (type) {
  if (type === A) {
    return '133px'
  }
}
const BarBottom = styled.section`
  margin: auto;
  padding-top: 15px;
  margin-right: ${({ type }) => setMarginRight(type)};
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
