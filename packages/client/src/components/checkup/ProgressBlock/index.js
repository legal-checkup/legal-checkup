import * as React from 'react'

import { DESKTOP, MOBILE, TABLET, progressBarId, currentTopicId } from '../../../constants'
import makeNextQuestionButton from '../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '../wrappers/makePreviousQuestionButton'

import Button from './Button'
import CurrentTopic from './CurrentTopic'
import ProgressBar from './ProgressBar'

export default function (props) {
  const { format } = props

  switch (format) {
    case DESKTOP:
      return (
        <ProgressBar data-testid={progressBarId}>
          {makePreviousQuestionButton(Button, TABLET)}
          {/* add question bar here */}
          {makeNextQuestionButton(Button, TABLET)}
        </ProgressBar>
      )
    case TABLET:
      return (
        <ProgressBar data-testid={progressBarId}>
          {makePreviousQuestionButton(Button, TABLET)}
          <CurrentTopic data-testid={currentTopicId} />
          {makeNextQuestionButton(Button, TABLET)}
        </ProgressBar>
      )
    default:
      return (
        <ProgressBar data-testid={progressBarId}>
          {makePreviousQuestionButton(Button, MOBILE)}
          <CurrentTopic data-testid={currentTopicId} />
          {makeNextQuestionButton(Button, MOBILE)}
        </ProgressBar>
      )
  }
}
