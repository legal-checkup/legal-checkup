import styled from 'styled-components'
import styledMap from 'styled-map'

import { DESKTOP, TABLET, MOBILE } from '../../../../constants'

const BlurbsWrapper = styled.span`
  display: flex;
  flex-direction: ${({ format }) => (format === MOBILE ? 'column' : 'row')};
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`
BlurbsWrapper.displayName = 'StyledBlurbsWrapper'

const BlurbWrapper = styled.span`
  width: ${({ format }) =>
    format === DESKTOP || format === TABLET ? 280 : 315}px;
  flex: none;
  display: flex;
  align-items: center;

  ${styledMap('format', {
    [`${DESKTOP}`]: `
      flex-direction: column;
      `,
    [`${TABLET}`]: `
      flex-direction: column;
      `,
    [`${MOBILE}`]: `
      flex-direction: row;
      `
  })};
`
BlurbWrapper.displayName = 'StyledBlurbWrapper'

const SupportingImage = styled.div`
  margin-right: ${({ format }) => (format === MOBILE ? '15px' : '0')};
  width: 50px;
  height: 50px;
  flex: none;
`
SupportingImage.displayName = 'StyledSupportingImage'

const SupportingTextWrapper = styled.span``
SupportingTextWrapper.displayName = 'StyledSupportingTextWrapper'

const SupportingTextTitle = styled.h4`
  font-size: ${({ format }) => (format === MOBILE ? 20 : 25)}px;
  font-weight: 900;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  line-height: 0.88;

  color: #b62645;

  margin: 18px 0 4px 0;
`
SupportingTextTitle.displayName = 'StyledSupportingTextTitle'

const SupportingTextParagraph = styled.p`
  font-size: ${({ format }) => (format === MOBILE ? '14px' : 'inherit')};
  margin-top: 0;
`
SupportingTextParagraph.displayName = 'StyledSupportingTextParagraph'

export {
  BlurbsWrapper,
  BlurbWrapper,
  SupportingImage,
  SupportingTextWrapper,
  SupportingTextTitle,
  SupportingTextParagraph
}
