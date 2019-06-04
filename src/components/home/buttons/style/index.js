import styled, { css } from 'styled-components'

import {
  DESKTOP,
  TABLET,
  MOBILE,
  WHITE,
  BLACK,
  BACKGROUND_BUTTON,
  FOREGROUND_BUTTON_ACTIVE,
  FOREGROUND_BUTTON_FOCUS_ACTIVE,
  FOREGROUND_LINK_ACTIVE,
  FOREGROUND_LINK_FOCUS_ACTIVE,
  BACKGROUND_BUTTON_FOCUS,
  BACKGROUND_LINK_FOCUS,
  BACKGROUND_BUTTON_ACTIVE,
  BACKGROUND_BUTTON_FOCUS_ACTIVE,
  BACKGROUND_LINK_ACTIVE,
  BACKGROUND_LINK_FOCUS_ACTIVE
} from '../../../../constants'

const getStartButtonMargin = ({ format }) => {
  switch (format) {
    case DESKTOP:
      return '0 auto 60px auto'

    case TABLET:
      return '0 auto 32px auto'

    case MOBILE:
      return '0 0 32px 0'

    default:
      return null
  }
}

const baseButtonStyle = css`
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  font-weight: 900;

  border-radius: 5px;

  max-width: 450px;

  display: inline-block;
  box-sizing: border-box;

  text-decoration-line: none;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

const StartCheckupButton = styled.button`
  ${baseButtonStyle}
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  margin-bottom: ${({ format }) => (format === DESKTOP ? 60 : 32)}px;

  margin: ${getStartButtonMargin};

  border: none;

  background-color: ${BACKGROUND_BUTTON};
  color: ${WHITE};

  &:hover {
    background-color: ${BLACK};
  }
  &:active {
    background-color: ${BACKGROUND_BUTTON_ACTIVE};
    color: ${FOREGROUND_BUTTON_ACTIVE};
  }
  &:focus {
    background-color: ${BACKGROUND_BUTTON_FOCUS};
  }
  &:focus:active {
    background-color: ${BACKGROUND_BUTTON_FOCUS_ACTIVE};
    color: ${FOREGROUND_BUTTON_FOCUS_ACTIVE};
  }

  font-size: 20px;
`
StartCheckupButton.displayName = 'StyledStartCheckupButton'

const getButtonWidth = ({ format }) => {
  return format === DESKTOP ? 'calc(50% - 10px)' : '100%'
}

const AboutCommunityLawButton = styled.a`
  ${baseButtonStyle}
  padding: 20px 0;
  margin: ${({ format }) => (format === DESKTOP ? '0 10px 0 0' : '0 0 15px 0')};
  width: ${getButtonWidth};

  color: ${BLACK};
  background-color: transparent;

  border: 3px solid ${WHITE};

  font-size: 16px;

  &:hover {
    background-color: ${BLACK};
    color: ${WHITE};
    border: 0;
  }
  &:active {
    background-color: ${BACKGROUND_LINK_ACTIVE};
    color: ${FOREGROUND_LINK_ACTIVE};
  }
  &:focus {
    background-color: ${BACKGROUND_LINK_FOCUS};
    color: ${WHITE};
    border: 0;
  }
  &:focus:active {
    background-color: ${BACKGROUND_LINK_FOCUS_ACTIVE};
    color: ${FOREGROUND_LINK_FOCUS_ACTIVE};
    border: 0;
  }
`
AboutCommunityLawButton.displayName = 'StyledAboutCommunityLawButton'

const CommunityLawServicesButton = styled.a`
  ${baseButtonStyle}
  padding: 20px 0;
  margin: ${({ format }) => (format === DESKTOP ? '0 0 0 10px' : '0 0')};
  width: ${getButtonWidth};

  color: ${BLACK};
  background-color: transparent;
  border: 3px solid ${WHITE};

  font-size: 16px;

  &:hover {
    background-color: ${BLACK};
    color: ${WHITE};
    border: 0;
  }
  &:active {
    background-color: ${BACKGROUND_LINK_ACTIVE};
    color: ${FOREGROUND_LINK_ACTIVE};
  }
  &:focus {
    background-color: ${BACKGROUND_LINK_FOCUS};
    color: ${WHITE};
    border: 0;
  }
  &:focus:active {
    background-color: ${BACKGROUND_LINK_FOCUS_ACTIVE};
    color: ${FOREGROUND_LINK_FOCUS_ACTIVE};
    border: 0;
  }
`
CommunityLawServicesButton.displayName = 'StyledCommunityLawServicesButton'

export {
  StartCheckupButton,
  AboutCommunityLawButton,
  CommunityLawServicesButton
}
