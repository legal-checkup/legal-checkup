import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import { KEYS } from '../../../../../state/constants'

function setWidth (format, type) {
  if (format === DESKTOP || format === TABLET) {
    return type === KEYS.esc ? '49px' : '29px'
  }
}

function setMarginRight (format, type) {
  if (type === KEYS.esc) {
    return 0
  }

  if (format === DESKTOP || format === TABLET) {
    return type === KEYS.A ? '133px' : '125px'
  } else {
    return '7px'
  }
}

const Label = styled.button`
  background-color: #ffffff;
  color: #a0a0a0;
  height: 29px;
  box-shadow: 0 2px 0 0 #cccccc;
  background-color: #ffffff;
  font-family:'Museo Sans Cyrl 500', sans-serif;
  font-weight:500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: ${({ format, type }) => setWidth(format, type)};
  margin-right: ${({ format, type }) => setMarginRight(format, type)};,
  &:after {
    content: '${({ type }) => type}';
  }
  ${styledMap('format', {
    [DESKTOP]: `
    border-radius: 5px;
    font-size:18px;`,
    [MOBILE]: `
    display:none`,
    [TABLET]: `
    border-radius: 5px;
    font-size:18px;`
  })}
`
Label.displayName = 'Label'

export default Label
