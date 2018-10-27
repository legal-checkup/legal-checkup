import React from 'react'

// import makeQuestionButton from '../../wrappers/makeQuestionButton'
import makeNextQuestionButton from '../../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '../../wrappers/makePreviousQuestionButton'

import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import ProgressBar from './ProgressBar'
import QuestionButton from './QuestionButton'

// const QuestionBtn = makeQuestionButton(QuestionButton)
const NextBtn = makeNextQuestionButton(NextButton)
const PreviousBtn = makePreviousQuestionButton(PreviousButton)

export default function DesktopProgressBar () {
  return (
    <ProgressBar>
      <PreviousBtn />
      {/* map through question numbers and add QuestionButton components here */}
      <NextBtn />
    </ProgressBar>
  )
}
