import React from 'react'
import { getQuestionIndices } from '@state/selectors'
import { map } from 'ramda'
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

function ProgressBarQuestions ({ questions }) {
  const addOne = a => a + 1

  const callMeSomethingMeaningful = question => {
    const WrappedDesktopButton = makeQuestionButton(StyledDesktopQuestionButton)
    return <WrappedDesktopButton>{addOne(question)}</WrappedDesktopButton>
  }
  return <ul>{map(callMeSomethingMeaningful, questions)}</ul>
}

function mapStateToProps (state) {
  return {
    questions: getQuestionIndices(state)
  }
}

export default connect(mapStateToProps)(ProgressBarQuestions)
