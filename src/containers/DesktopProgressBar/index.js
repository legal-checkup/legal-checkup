import React from 'react'

import makeNextQuestionButton from '@wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '@wrappers/makePreviousQuestionButton'
import StyledDesktopNextButton from '@components/styled/DesktopNextButton'
import StyledDesktopPreviousButton from '@components/styled/DesktopPreviousButton'
import StyledDesktopProgressBar from '@components/styled/DesktopProgressBar'
import TopicQuestionsList from '@containers/TopicQuestionsList'

const NextButton = makeNextQuestionButton(StyledDesktopNextButton)
const PreviousButton = makePreviousQuestionButton(StyledDesktopPreviousButton)

export default function DesktopProgressBar () {
  return (
    <StyledDesktopProgressBar>
      <PreviousButton />
      <TopicQuestionsList />
      <NextButton />
    </StyledDesktopProgressBar>
  )
}
