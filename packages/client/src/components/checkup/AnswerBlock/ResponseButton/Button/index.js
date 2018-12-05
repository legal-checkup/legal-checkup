import styled from 'styled-components'
import { DESKTOP, MOBILE, TABLET } from '../../../../../constants'
import styledMap from 'styled-map'
import { NOT_SURE } from '../../../../../state/constants'

function setWidthButton (format, type) {
  if (format === DESKTOP) {
    if (type === NOT_SURE) {
      return '155px'
    } else {
      return '153px'
    }
  } else if (format === TABLET) {
    if (type === NOT_SURE) {
      return '155px'
    } else {
      return '153px'
    }
  } else {
    if (type === NOT_SURE) {
      return '105px'
    } else {
      return '85px'
    }
  }
}

function setMarginRight (format, type) {
  if (format === (DESKTOP || TABLET)) {
    if (type === NOT_SURE) {
      return 0
    } else {
      return '10px'
    }
  } else {
    if (type === NOT_SURE) {
      return 0
    } else {
      return '7px'
    }
  }
}

const Button = styled.button`
  background-color: #eeedea;
  height: 78px;
  border:none;
  font-family:MuseoSans;
  font-weight:500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: ${({ format, type }) => setWidthButton(format, type)};
  margin-right: ${({ format, type }) => setMarginRight(format, type)};,
  &:after {
    content: '${({ type }) => type}';
  }
  ${styledMap('format', {
    [DESKTOP]: `
    border-radius: 5px;
    font-size:26px;`,
    [MOBILE]: `
    border-radius: 4px;
    font-size:20px;`,
    [TABLET]: `
    border-radius: 5px;
    font-size:26px;`
  })}
`
Button.displayName = 'Button'

export default Button
