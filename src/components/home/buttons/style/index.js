import styled, { css } from 'styled-components'

import {
  DESKTOP,
  TABLET,
  MOBILE,
  ROUGE,
  WHITE,
  BLACK,
  PINK,
  DARK_ROUGE
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

  background-color: ${ROUGE};
  color: ${WHITE};

  &:hover {
    background-color: ${BLACK};
  }
  &:active {
    background-color: ${PINK};
    color: ${ROUGE};
  }
  &:focus {
    background-color: ${DARK_ROUGE};
  }
  &:focus:active {
    background-color: ${PINK};
    color: ${ROUGE};
  }

  font-size: 20px;
`
StartCheckupButton.displayName = 'StyledStartCheckupButton'

const getButtonWidth = ({ format }) => {
  return format === MOBILE ? '100%' : 'calc(50% - 10px)'
}

const AboutCommunityLawButton = styled.a`
  ${baseButtonStyle}
  padding: 20px 0;
  margin: ${({ format }) => (format === MOBILE ? '0 0 15px 0' : '0 10px 0 0')};
  width: ${getButtonWidth};

  color: ${BLACK};
  background-color: transparent;

  border: 3px solid ${WHITE};

  font-size: 16px;

  &:hover {
    background-color: ${BLACK};
    color: ${WHITE};
  }
  &:active {
    background-color: ${PINK};
    color: ${ROUGE};
  }
  &:focus {
    background-color: ${DARK_ROUGE};
    color: ${WHITE};
    border: 0;
  }
  &:focus:active {
    background-color: ${PINK};
    color: ${ROUGE};
    border: 0;
  }
`
AboutCommunityLawButton.displayName = 'StyledAboutCommunityLawButton'

const CommunityLawServicesButton = styled.a`
  ${baseButtonStyle}
  padding: 20px 0;
  margin: ${({ format }) => (format === MOBILE ? '0 0' : '0 0 0 10px')};
  width: ${getButtonWidth};

  color: ${BLACK};
  background-color: transparent;
  border: 3px solid ${WHITE};

  font-size: 16px;

  &:hover {
    background-color: ${BLACK};
    color: ${WHITE};
  }
  &:active {
    background-color: ${PINK};
    color: ${ROUGE};
  }
  &:focus {
    background-color: ${DARK_ROUGE};
    color: ${WHITE};
    border: 0;
  }
  &:focus:active {
    background-color: ${PINK};
    color: ${ROUGE};
    border: 0;
  }
`
CommunityLawServicesButton.displayName = 'StyledCommunityLawServicesButton'

export {
  StartCheckupButton,
  AboutCommunityLawButton,
  CommunityLawServicesButton
}
