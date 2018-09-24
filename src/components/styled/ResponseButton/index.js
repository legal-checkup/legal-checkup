import { NO, NOT_SURE, YES } from '@state/constants'

import styled from 'styled-components'

const ResponseButton = styled.button`
  background-color: White;
  border: solid 2px #b5b5b5;
  border-right: ${({ type }) => (type === YES ? 0 : 'solid 2px #b5b5b5')};
  border-top-left-radius: ${({ type }) => (type === NO ? 0 : '5px')};
  border-top-right-radius: ${({ type }) => (type === YES ? 0 : '5px')};
  border-bottom-left-radius: ${({ type }) => (type === NO ? 0 : '5px')};
  border-bottom-right-radius: ${({ type }) => (type === YES ? 0 : '5px')};
  height: 78px;
  margin-left: ${({ type }) => (type === NOT_SURE ? '7px' : 0)};
  width: ${({ type }) => (type === NOT_SURE ? '109px' : '88px')};

  &:after {
    content: '${({ type }) => type}';
  }
`
ResponseButton.displayName = 'StyledResponseButton'

export default ResponseButton
