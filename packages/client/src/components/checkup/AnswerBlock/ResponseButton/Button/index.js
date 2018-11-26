import styled from 'styled-components'

import { NOT_SURE } from '../../../../../state/constants'

const Button = styled.button`
  background-color: #eeedea;
  border-radius: 5px;
  font-family:MuseoSans;
  font-size:26px;
  font-weight:500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-right: ${({ type }) => (type === NOT_SURE ? 0 : '10px')};
  height: 78px;
  width: ${({ type }) => (type === NOT_SURE ? '155px' : '153px')};
  &:after {
    content: '${({ type }) => type}';
  }
`
Button.displayName = 'Button'

export default Button
