import { map } from 'ramda'
import { isNonEmptyArray } from 'ramda-adjunct'
import React from 'react'

import makeNextQuestionButton from '@wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '@wrappers/makePreviousQuestionButton'
import StyledDesktopNextButton from '@components/styled/DesktopNextButton'
import StyledDesktopPreviousButton from '@components/styled/DesktopPreviousButton'
import StyledDesktopProgressBar from '@components/styled/DesktopProgressBar'
import TopicQuestions from '@containers/TopicQuestions'

const NextButton = makeNextQuestionButton(StyledDesktopNextButton)
const PreviousButton = makePreviousQuestionButton(StyledDesktopPreviousButton)

export default function DesktopProgressBar ({ topics = [] }) {
  return (
    <StyledDesktopProgressBar>
      <PreviousButton />
      {isNonEmptyArray(topics) &&
        map(({ id, name }) => <TopicQuestions key={id} topic={name} />, topics)}
      <NextButton />
    </StyledDesktopProgressBar>
  )
}
