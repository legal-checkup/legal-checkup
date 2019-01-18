import styled from 'styled-components'

import { DESKTOP, TABLET, MOBILE } from '../../../../constants'

const getButtonMargin = ({ format }) => {
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

const StartCheckupButton = styled.button`
  width: 100%;
  max-width: 450px;
  padding: 30px 0;
  margin: 0 auto;
  margin-bottom: ${({ format }) => (format === DESKTOP ? 60 : 32)}px;

  margin: ${getButtonMargin};

  display: block;

  border-radius: 5px;
  border: none;

  background-color: #b62645;
  color: #fff;

  font-weight: 900;
  font-size: 20px;
  font-family: 'Museo Sans Cyrl 900', sans-serif;

  &:hover {
    cursor: pointer;
  }
`
StartCheckupButton.displayName = 'StyledStartCheckupButton'

const AboutCommunityLawButton = styled.button``
AboutCommunityLawButton.displayName = 'StyledAboutCommunityLawButton'

export { StartCheckupButton }
