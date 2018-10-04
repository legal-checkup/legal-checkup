import React, { Fragment } from 'react'
import {
  getQuestionIndices,
  getActiveQuestionIndex,
  getResponseCount,
  getQuestionIndex
} from '@state/selectors'
import { length } from 'ramda'
import { mapIndexed } from 'ramda-adjunct'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'
import { connect } from 'react-redux'

import makeQuestionButton from '@wrappers/makeQuestionButton'

function getNextQuestionNumber (questionIndices, responseCount) {
  const questionCount = length(questionIndices)

  return responseCount < questionCount ? responseCount + 1 : responseCount
}

function ProgressBarQuestions ({
  questionIndices,
  activeQuestionIndex,
  responseCount
}) {
  return (
    <Fragment>
      {/* {mapIndexed((questionIndex, idx) => {

        if (questionIndex === activeQuestionIndex) {
          return (
            <WrappedDesktopButton key={idx} onClick={clickHandler} enabled>
              {questionIndex + 1}
            </WrappedDesktopButton>
          )
        }

        if (questionIndex <= responseCount) {
          return (
            <WrappedDesktopButton key={idx} enabled>
              {questionIndex + 1}
            </WrappedDesktopButton>
          )
        }

        if (
          questionIndex ===
          getNextQuestionNumber(questionIndices, responseCount)
        ) {
          return (
            <WrappedDesktopButton key={idx} enabled>
              {questionIndex + 1}
            </WrappedDesktopButton>
          )
        }

        return (
          <WrappedDesktopButton key={idx} enabled>
            {questionIndex + 1}
          </WrappedDesktopButton>
        )
      }, questionIndices)} */}
      {mapIndexed((questionIndex, idx) => {
        const WrappedDesktopButton = makeQuestionButton(
          StyledDesktopQuestionButton
        )

        return (
          <WrappedDesktopButton key={idx}>
            {questionIndex + 1}
          </WrappedDesktopButton>
        )
      }, questionIndices)}
    </Fragment>
  )
}

function mapStateToProps (state) {
  return {
    questionIndices: getQuestionIndices(state),
    activeQuestionIndex: getActiveQuestionIndex(state),
    responseCount: getResponseCount(state),
    questionIndex: getQuestionIndex(state)
  }
}

export default connect(mapStateToProps)(ProgressBarQuestions)
