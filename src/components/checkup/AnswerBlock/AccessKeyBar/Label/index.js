import styled from 'styled-components'

import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import { KEYS } from '../../../../../state/constants'

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
  border: solid 1px #ccc;
  color: #a0a0a0;
  box-shadow: 0 2px 0 0 #cccccc;
  background-color: #ffffff;
  font-family:'Museo Sans Cyrl 500', sans-serif;
  font-weight: 500;
  text-align: center;
  margin-right: ${({ format, type }) => setMarginRight(format, type)};

  border-radius: 5px;
  font-size:18px;

  padding: 3px 9px;

  ${({ format }) => format === MOBILE && 'display: none;'}
  &:after {
    content: '${({ type }) => type}';
  }
`
Label.displayName = 'Label'

export default Label
