import React from 'react'
import { StyledQuestionCounter } from '../styled'

import { handleFalsy } from '../../utilities'

export default function QuestionCounter ({
  questionCount = 0,
  activeQuestion = null
}) {
  return handleFalsy(
    activeQuestion && questionCount,
    <StyledQuestionCounter>
      {`${activeQuestion} / ${questionCount}`}
    </StyledQuestionCounter>
  )
}
