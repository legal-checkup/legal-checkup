import CurrentTopic from '../CurrentTopic'
import React from 'react'
import StyledMobileNextButton from '@components/styled/MobileNextButton'
import StyledMobilePreviousButton from '@components/styled/MobilePreviousButton'
import StyledMobileProgressBar from '@components/styled/MobileProgressBar'
import makeNextQuestionButton from '@wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '@wrappers/makePreviousQuestionButton'

const NextButton = makeNextQuestionButton(StyledMobileNextButton)
const PreviousButton = makePreviousQuestionButton(StyledMobilePreviousButton)

export default function MobileProgressBar () {
  return (
    <StyledMobileProgressBar>
      <PreviousButton />
      <CurrentTopic />
      <NextButton />
    </StyledMobileProgressBar>
  )
}
