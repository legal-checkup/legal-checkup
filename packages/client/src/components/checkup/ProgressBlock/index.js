import * as React from 'react'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import makeNextQuestionButton from '../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '../wrappers/makePreviousQuestionButton'

import Button from './Button'
import CurrentTopic from './CurrentTopic'
import ProgressBar from './ProgressBar'

export default function (props) {
  const { format } = props
  const PreviousButton = makePreviousQuestionButton(Button, format)
  const NextButton = makeNextQuestionButton(Button, format)

  switch (format) {
    case DESKTOP:
    case TABLET:
    case MOBILE:
    default:
      return (
        <ProgressBar>
          <PreviousButton />
          <CurrentTopic />
          <NextButton />
        </ProgressBar>
      )
  }
}
