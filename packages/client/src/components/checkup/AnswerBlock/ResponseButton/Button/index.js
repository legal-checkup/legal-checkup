import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import { NOT_SURE } from '../../../../../state/constants'

function setWidthButton (format, type) {
  if (format === DESKTOP || format === TABLET) {
    return type === NOT_SURE ? '155px' : '153px'
  } else {
    return type === NOT_SURE ? '105px' : '85px'
  }
}

function setMarginRight (format, type) {
  if (format === DESKTOP || format === TABLET) {
    return type === NOT_SURE ? 0 : '10px'
  } else {
    return type === NOT_SURE ? 0 : '7px'
  }
}

const Button = styled.button`
  background-color: #eeedea;
  height: 78px;
  border:none;
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-weight:500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: ${({ format, type }) => setWidthButton(format, type)};
  margin-right: ${({ format, type }) => setMarginRight(format, type)};,
  &:after {
    content: '${({ type }) => type}';
  }
  ${styledMap('format', {
    [DESKTOP]: `
    border-radius: 5px;
    font-size:26px;`,
    [MOBILE]: `
    border-radius: 4px;
    font-size:20px;
    margin-bottom:20px;`,
    [TABLET]: `
    border-radius: 5px;
    font-size:26px;`
  })}
`
Button.displayName = 'Button'

export default Button
