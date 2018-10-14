import React, { Fragment } from 'react'
import { getQuestionIndices, getActiveQuestionIndex } from '@state/selectors'

import { mapIndexed } from 'ramda-adjunct'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'
import StyledActiveQuestion from '@components/styled/ActiveQuestionNumber'
import { connect } from 'react-redux'

import makeQuestionButton from '@wrappers/makeQuestionButton'

function ProgressBarQuestions ({ questionIndices, activeQuestionIndex }) {
  return (
    <Fragment>
      {mapIndexed((questionIndex, idx) => {
        const WrappedDesktopButton = makeQuestionButton(
          StyledDesktopQuestionButton
        )
        const ActiveQuestion = makeQuestionButton(StyledActiveQuestion)

        if (activeQuestionIndex === questionIndex) {
          return (
            <ActiveQuestion key={idx} questionIndex={idx}>
              {questionIndex + 1}
            </ActiveQuestion>
          )
        } else {
          return (
            <WrappedDesktopButton key={idx} questionIndex={idx}>
              {questionIndex + 1}
            </WrappedDesktopButton>
          )
        }
      }, questionIndices)}
    </Fragment>
  )
}

function mapStateToProps (state, { topic }) {
  return {
    questionIndices: getQuestionIndices(state),
    activeQuestionIndex: getActiveQuestionIndex(state)
  }
}

export default connect(mapStateToProps)(ProgressBarQuestions)
