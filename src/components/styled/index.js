import styled from 'styled-components'

import { MOBILE, HEADER_TEXT, GREYISH_BROWN, BLACK } from '../../constants'

const PageHeading = styled.h3`
  font-weight: 900;
  font-size: ${({ format }) => (format === MOBILE ? 22 : 32)}px;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  text-align: left;

  color: ${HEADER_TEXT};
`
PageHeading.displayName = 'StyledHeading'

const PageQuestion = styled.h5`
  font-weight: 900;
  font-size: ${({ format }) => (format === MOBILE ? 12 : 17)}px;
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  text-align: inherit;

  margin: ${({ dense }) => (dense ? 0 : 18)}px;

  color: ${BLACK};
`
PageQuestion.displayName = 'StyledQuestion'

const QuestionAnswerWrapper = styled.div`
  text-align: left;
`
QuestionAnswerWrapper.displayName = 'StyledQuestionAnswerWrapper'

const PageText = styled.p`
  font-weight: 500;
  font-size: ${({ format }) => (format === MOBILE ? 15 : 18)}px;
  font-family: 'Museo Sans Cyrl 500', sans-serif;

  margin: ${({ dense }) => (dense ? 0 : 18)}px;
`
PageText.displayName = 'PageText'

const ResultHeading = styled.p`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-size: 18px;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${GREYISH_BROWN};
`
ResultHeading.displayName = 'ResultHeading'

const ResultTitle = styled.div`
  font-family: 'Museo Sans Cyrl 900', sans-serif;
  color: #b62645;
  font-size: 32px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: 900;
`
ResultTitle.displayName = 'ResultTitle'

const ResultText = styled.p`
  font-family: 'Museo Sans Cyrl 500', sans-serif;
  font-size: 18px;
`

ResultText.displayName = 'ResultText'

export {
  PageHeading,
  PageQuestion,
  PageText,
  ResultHeading,
  ResultTitle,
  ResultText,
  QuestionAnswerWrapper
}
