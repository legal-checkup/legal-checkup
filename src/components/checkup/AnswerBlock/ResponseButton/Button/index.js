import styled from 'styled-components'

import {
  BACKGROUND_BUTTON,
  BUTTON_BORDER_FOCUS,
  BLACK,
  DESKTOP,
  MOBILE,
  TABLET,
  WHITE,
  ROUGE,
  BACKGROUND_BUTTON_ACTIVE,
  OFF_WHITE,
  TEXT_COLOR
} from '../../../../../constants'
import styledMap from 'styled-map'

import { NOT_SURE } from '../../../../../state/constants'

function setWidthButton (format, type) {
  if (format === DESKTOP || format === TABLET) {
    return type === NOT_SURE ? '155px' : '153px'
  } else {
    return type === NOT_SURE ? '105px' : '85px'
  }
}

function setMarginRight (format, type) {
  if (format === DESKTOP || format === TABLET) {
    return type === NOT_SURE ? 0 : '10px'
  } else {
    return type === NOT_SURE ? 0 : '7px'
  }
}

function setPreviousSelectedBackgroundColor (buttonType, activeQuestionAnswer) {
  return buttonType === activeQuestionAnswer
    ? BACKGROUND_BUTTON_ACTIVE
    : OFF_WHITE
}

function setPreviousSelectedTextColor (buttonType, activeQuestionAnswer) {
  return buttonType === activeQuestionAnswer ? ROUGE : TEXT_COLOR
}

const Button = styled.button`
  background-color: ${({ format, type, activeQuestionAnswer }) =>
    setPreviousSelectedBackgroundColor(type, activeQuestionAnswer)};
  color: ${({ format, type, activeQuestionAnswer }) =>
    setPreviousSelectedTextColor(type, activeQuestionAnswer)};
  height: 78px;
  border: none;
  font-family: 'Museo Sans Cyrl 500', sans-serif;
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

  &:hover {
    background-color: ${BACKGROUND_BUTTON};
    color: ${WHITE};
  }
  &:active {
    background-color: ${BLACK};
    color: ${WHITE};
  }
  &:focus{
    outline: 0px;
    border-color: ${BUTTON_BORDER_FOCUS}
    border-style: solid;
  }
  &:focus:active {
    background-color: ${BLACK};
    color: ${WHITE};
  }

  ${styledMap('format', {
    [DESKTOP]: `
    border-radius: 5px;
    font-size:26px;`,
    [MOBILE]: `
    border-radius: 4px;
    font-size:20px;
    margin-bottom: 20px`,
    [TABLET]: `
    border-radius: 5px;
    font-size:26px;`
  })}
`
Button.displayName = 'Button'

export default Button
