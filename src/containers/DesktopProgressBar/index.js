import React from 'react'
import { connect } from 'react-redux'
import StyledDesktopNextButton from '@components/styled/DesktopNextButton'
import StyledDesktopPreviousButton from '@components/styled/DesktopPreviousButton'
import StyledDesktopProgressBar from '@components/styled/DesktopProgressBar'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'

import { mapIndexed } from 'ramda-adjunct'

import makeNextQuestionButton from '@wrappers/makeNextQuestionButton'
import makePreviousQuestionButton from '@wrappers/makePreviousQuestionButton'
import makeQuestionButton from '@wrappers/makeQuestionButton'

import { getTopicList } from '@state/selectors'

import ProgressBarQuestions from '../ProgressBarQuestions'
import TopicQuestions from '../TopicQuestions'

const NextButton = makeNextQuestionButton(StyledDesktopNextButton)
const PreviousButton = makePreviousQuestionButton(StyledDesktopPreviousButton)
// const QuestionButton = makeQuestionButton(StyledDesktopQuestionButton)

function DesktopProgressBar ({ topics }) {
  // const questionNumbers = QuestionNumber()
  // console.log("function", getQuestionIndices())

  return (
    <StyledDesktopProgressBar>
      <PreviousButton />
      {mapIndexed(
        (topic, idx) => (
          <TopicQuestions key={idx} topic={topic} />
        ),
        topics
      )}
      <NextButton />
    </StyledDesktopProgressBar>
  )
}

function mapStateToProps (state) {
  return { topics: getTopicList(state) }
}

export default connect(mapStateToProps)(DesktopProgressBar)
