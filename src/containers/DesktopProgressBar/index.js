import React from 'react'
import StyledDesktopNextButton from '@components/styled/DesktopNextButton'
import StyledDesktopPreviousButton from '@components/styled/DesktopPreviousButton'
import StyledDesktopProgressBar from '@components/styled/DesktopProgressBar'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'

import makeNextQuestionButton from '@wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '@wrappers/makePreviousQuestionButton'
import makeQuestionButton from '@wrappers/makeQuestionButton'

import ProgressBarQuestions from '../ProgressBarQuestions'

const NextButton = makeNextQuestionButton(StyledDesktopNextButton)
const PreviousButton = makePreviousQuestionButton(StyledDesktopPreviousButton)
const QuestionButton = makeQuestionButton(StyledDesktopQuestionButton)

export default function DesktopProgressBar () {
  // const questionNumbers = QuestionNumber()
  // console.log("function", getQuestionIndices())

  return (
    <StyledDesktopProgressBar>
      <PreviousButton />
      <ProgressBarQuestions />

      <NextButton />
    </StyledDesktopProgressBar>
  )
}
