import React from 'react'
import { StyledQuestionCounter } from '../styled'
import { keysIn, length } from 'ramda'
import { isNotNil } from 'ramda-adjunct'

export default function QuestionCounter ({
  questions = {},
  activeQuestion = null
}) {
  const questionCount = length(keysIn(questions))
  return (
    isNotNil(activeQuestion) &&
    questionCount > 0 && (
      <StyledQuestionCounter>
        {`${activeQuestion} / ${questionCount}`}
      </StyledQuestionCounter>
    )
  )
}
