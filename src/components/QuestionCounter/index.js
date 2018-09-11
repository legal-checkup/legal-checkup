import React from 'react'
import { StyledQuestionCounter } from '../styled'
import { keysIn, length } from 'ramda'

import { handleFalsy } from '../../utilities'

export default function QuestionCounter ({
  questions = {},
  activeQuestion = null
}) {
  const questionCount = length(keysIn(questions))
  return handleFalsy(
    activeQuestion && questionCount,
    <StyledQuestionCounter>
      {`${activeQuestion} / ${questionCount}`}
    </StyledQuestionCounter>
  )
}
