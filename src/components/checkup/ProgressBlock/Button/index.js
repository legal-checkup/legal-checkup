import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const getColor = ({ active, enabled }) => {
  if (active) {
    return 'white'
  } else if (enabled) {
    return 'black'
  } else {
    return '#c0c0c0'
  }
}

const Button = styled.button`
  stroke: ${({ enabled }) => (enabled ? '#b62645' : '#dcb1b8')};
  border: none;
  color: ${getColor};
  cursor: ${({ enabled }) => (enabled ? 'pointer' : 'default')};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#b62645' : 'transparent')};
  font-size: 13px;
  font-weight: bold;
  outline: none;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding: 0px;

  ${styledMap('format', {
    [`${DESKTOP}Next`]: ``,
    [`${DESKTOP}Previous`]: ``,
    [`${DESKTOP}Question`]: ``,
    [`${MOBILE}Next`]: ``,
    [`${MOBILE}Previous`]: ``,
    [`${MOBILE}Question`]: ``,
    [`${TABLET}Next`]: ``,
    [`${TABLET}Previous`]: ``,
    [`${TABLET}Question`]: ``
  })}
`
Button.displayName = 'Button'

export default Button
