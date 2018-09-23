import React from 'react'
import StyledQuestionCounter from '../styled/QuestionCounter'
import handleFalsy from '@utilities/handleFalsy'

export default function QuestionCounter ({
  questionCount = 0,
  activeQuestionIndex = null
}) {
  const counter = (
    <StyledQuestionCounter>
      {`${activeQuestionIndex + 1} / ${questionCount}`}
    </StyledQuestionCounter>
  )

  return handleFalsy(
    activeQuestionIndex >= 0 && questionCount > activeQuestionIndex,
    counter
  )
}
