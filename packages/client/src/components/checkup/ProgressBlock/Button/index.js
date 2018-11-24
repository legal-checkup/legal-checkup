import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, MOBILE, TABLET } from '../../../../constants'

const Button = styled.button`
  // background-color: #ededed;
  border-radius: 0 5px 5px 0;
  border: none;
  color: ${({ enabled }) => (enabled ? '#000' : '#c0c0c0')};
  height: 42px;
  cursor: ${enabled => (enabled ? 'pointer' : 'default')}
  border-radius: ${({ active }) => (active ? '22px' : '0 5px 5px 0')};
  background-color: ${({ active }) => (active ? '#b62645' : '#ededed')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

  outline: none;
  width: 48px;

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
