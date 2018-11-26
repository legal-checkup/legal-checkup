import styled from 'styled-components'

import { NO, NOT_SURE, YES } from '../../../../../state/constants'

const Button = styled.button`
  background-color: #eeedea;
  border: 5px;
  margin-right: ${({ type }) => (type === NOT_SURE ? 0 : '10px')};
  border-right: ${({ type }) => (type === YES ? 0 : 'solid 2px #b5b5b5')};
  border-top-left-radius: ${({ type }) => (type === NO ? 0 : '5px')};
  border-top-right-radius: ${({ type }) => (type === YES ? 0 : '5px')};
  border-bottom-left-radius: ${({ type }) => (type === NO ? 0 : '5px')};
  border-bottom-right-radius: ${({ type }) => (type === YES ? 0 : '5px')};
  height: 78px;
  margin-left: ${({ type }) => (type === NOT_SURE ? '7px' : 0)};
  width: ${({ type }) => (type === NOT_SURE ? '155px' : '153px')};

  &:after {
    content: '${({ type }) => type}';
  }
`
Button.displayName = 'Button'

export default Button
