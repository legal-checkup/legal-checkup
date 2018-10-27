import React from 'react'

import makeNextQuestionButton from '../../../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '../../../wrappers/makePreviousQuestionButton'

import CurrentTopic from './CurrentTopic'
import NextButton from './NextButton'
import PreviousButton from './PreviousButton'
import ProgressBar from './ProgressBar'

const Next = makeNextQuestionButton(NextButton)
const Previous = makePreviousQuestionButton(PreviousButton)

export default function MobileProgressBar () {
  return (
    <ProgressBar>
      <Previous />
      <CurrentTopic />
      <Next />
    </ProgressBar>
  )
}
