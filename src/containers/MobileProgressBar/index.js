import CurrentTopic from '../CurrentTopic'
import React from 'react'
import StyledMobileProgressBar from '@components/styled/MobileProgressBar'
import StyledProgressBarNextButton from '@components/styled/ProgressBarNextButton'
import StyledProgressBarPreviousButton from '@components/styled/ProgressBarPreviousButton'
import makeNextQuestionButton from '@wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '@wrappers/makePreviousQuestionButton'

const NextButton = makeNextQuestionButton(StyledProgressBarNextButton)
const PreviousButton = makePreviousQuestionButton(
  StyledProgressBarPreviousButton
)

export default function MobileProgressBar () {
  return (
    <StyledMobileProgressBar>
      <PreviousButton />
      <CurrentTopic />
      <NextButton />
    </StyledMobileProgressBar>
  )
}
