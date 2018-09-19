import React from 'react'
import StyledQuestionCounter from '../styled/QuestionCounter'
import handleFalsy from '../../utilities/handleFalsy'

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
