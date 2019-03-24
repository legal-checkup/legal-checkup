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
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  font-size: 20px;
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
      height: 24px;
      padding: 28px 26px 26px;
    `,
    [TABLET]: `
      height: 24px;
      padding: 28px 26px 26px;
    `
  })}
`
Button.displayName = 'Button'

export default Button
