import React from 'react'
import { getQuestionIndices } from '@state/selectors'
import { map } from 'ramda'
import StyledDesktopQuestionButton from '@components/styled/DesktopQuestionButton'
import { connect } from 'react-redux'

import makeQuestionButton from '@wrappers/makeQuestionButton'

function ProgressBarQuestions ({ questions }) {
  const addOne = a => a + 1

  return (
    <StyledDesktopQuestionButton>
      {map(
        addOne,
        (question => {
          question
        },
          questions)
      )}
    </StyledDesktopQuestionButton>
  )
}

function mapStateToProps (state) {
  return {
    questions: getQuestionIndices(state)
  }
}

export default connect(mapStateToProps)(ProgressBarQuestions)
