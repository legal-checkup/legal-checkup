import React from 'react'
import { StyledQuestionCounter } from '../styled'

export default function QuestionCounter ({ questions, activeQuestion }) {
  return (
    <StyledQuestionCounter>
      {activeQuestion + '/' + Object.keys(questions).length}
    </StyledQuestionCounter>
  )
}
