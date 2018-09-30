import React, { Fragment } from 'react'
import {
  getQuestionIndices,
  getActiveQuestionIndex,
  getResponseCount
} from '@state/selectors'
import { mapIndexed } from 'ramda-adjunct'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'
import { connect } from 'react-redux'

import makeQuestionButton from '@wrappers/makeQuestionButton'

// function ProgressBarQuestions ({ questions }) {
//   const addOne = a => a + 1

//   return (
//     <StyledDesktopQuestionButton>
//       {map(
//         addOne,
//           questions)
//       }
//     </StyledDesktopQuestionButton>
//   )
// }

// function ProgressBarQuestions ({ questions }) {
//   const addOne = a => a + 1
// const Component = question => <StyledDesktopQuestionButton>{addOne(question)}</StyledDesktopQuestionButton>

//   return (
//     <ul>
//       {map(
//         Component,
//           questions)
//       }
//     </ul>
//   )
// }

function ProgressBarQuestions ({
  questionIndices,
  activeQuestionIndex,
  responseCount
}) {
  return (
    <Fragment>
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
    responseCount: getResponseCount(state)
  }
}

export default connect(mapStateToProps)(ProgressBarQuestions)
// RA.mapIndexed((val, idx, list) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r'])
