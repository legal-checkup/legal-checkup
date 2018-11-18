import * as React from 'react'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
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
        <ProgressBar>
          {makePreviousQuestionButton(Button, TABLET)}
          {/* add question bar here */}
          {makeNextQuestionButton(Button, TABLET)}
        </ProgressBar>
      )
    case TABLET:
      return (
        <ProgressBar>
          {makePreviousQuestionButton(Button, TABLET)}
          <CurrentTopic />
          {makeNextQuestionButton(Button, TABLET)}
        </ProgressBar>
      )
    default:
      return (
        <ProgressBar>
          {makePreviousQuestionButton(Button, MOBILE)}
          <CurrentTopic />
          {makeNextQuestionButton(Button, MOBILE)}
        </ProgressBar>
      )
  }
}
