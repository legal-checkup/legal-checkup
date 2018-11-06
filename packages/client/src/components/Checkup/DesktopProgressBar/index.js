import React from 'react'

// import makeQuestionButton from '../../wrappers/makeQuestionButton'
import makeNextQuestionButton from '../../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton
  from '../../wrappers/makePreviousQuestionButton'

import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import ProgressBar from './ProgressBar'

// import QuestionButton from './QuestionButton'

// const QuestionBtn = makeQuestionButton(QuestionButton)
const ConnectedNextButton = makeNextQuestionButton(NextButton)
const ConnectedPreviousButton = makePreviousQuestionButton(PreviousButton)

export default function DesktopProgressBar () {
  return (
    <ProgressBar>
      <ConnectedPreviousButton />
      {/* map through question numbers and add QuestionButton components here */}
      <ConnectedNextButton />
    </ProgressBar>
  )
}
