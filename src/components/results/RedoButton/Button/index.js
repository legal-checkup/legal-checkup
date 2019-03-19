import styled from 'styled-components'
import styledMap from 'styled-map'

import {
  DESKTOP,
  MOBILE,
  TABLET,
  BACKGROUND_BUTTON,
  WHITE
} from '../../../../constants'

const Button = styled.div`
  border-radius: 5px;
  border: solid 3px #ffffff;
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: #b62645;
  text-decoration: none;
  margin: auto;

  &:hover {
    background-color: ${BACKGROUND_BUTTON};
    color: ${WHITE};
  }

  ${styledMap('format', {
    [DESKTOP]: `
      height: 78px;
      padding-top: 39px;
      width: 920px;
    `,
    [MOBILE]: `
      width: 263px;
      height: 24px;
      padding: 28px 26px 26px;
    `,
    [TABLET]: `
      width: 263px;
      height: 24px;
      padding: 28px 26px 26px;
    `
  })}
`
Button.displayName = 'Button'

export default Button
