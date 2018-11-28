import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'
import { NOT_SURE } from '../../../../../state/constants'

const Button = styled.button`
  background-color: #eeedea;
  height: 78px;
  font-family:MuseoSans;
  font-weight:500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  &:after {
    content: '${({ type }) => type}';
  }
  ${styledMap('format', {
    [DESKTOP]: `
    width: ${({ type }) => (type === NOT_SURE ? '155px' : '153px')};
    border-radius: 5px;
    font-size:26px;
    margin-right: ${({ type }) => (type === NOT_SURE ? 0 : '10px')};`,
    [MOBILE]: `
    width: ${({ type }) => (type === NOT_SURE ? '101px' : '85px')};
    border-radius: 4px;
    font-size:20px;
    margin-right: ${({ type }) => (type === NOT_SURE ? 0 : '7px')};`,
    [TABLET]: `
    width: ${({ type }) => (type === NOT_SURE ? '155px' : '153px')};
    border-radius: 5px;
    font-size:26px;
    margin-right: ${({ type }) => (type === NOT_SURE ? 0 : '10px')};`
  })}
`
Button.displayName = 'Button'

export default Button
