import * as React from 'react'

import { DESKTOP, MOBILE, TABLET } from '../../../constants'
import makeNextQuestionButton from '../wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '../wrappers/makePreviousQuestionButton'

import Button from './Button'
import CurrentTopic from './CurrentTopic'
import DesktopProgressBar from './DesktopProgressBar'
import ProgressBar from './ProgressBar'

export default function (props) {
  const { format } = props
  const PreviousQuestionButton = makePreviousQuestionButton(Button)
  const NextQuestionButton = makeNextQuestionButton(Button)

  switch (format) {
    case DESKTOP:
      return (
        <ProgressBar>
          <PreviousQuestionButton format={DESKTOP} />
          <DesktopProgressBar />
          <NextQuestionButton format={DESKTOP} />
        </ProgressBar>
      )
    case TABLET:
      return (
        <ProgressBar>
          <PreviousQuestionButton format={TABLET} />
          <CurrentTopic />
          <NextQuestionButton format={TABLET} />
        </ProgressBar>
      )
    default:
      return (
        <ProgressBar>
          <PreviousQuestionButton format={MOBILE} />
          <CurrentTopic />
          <NextQuestionButton format={MOBILE} />
        </ProgressBar>
      )
  }
}
