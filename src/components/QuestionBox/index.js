import React from 'react'
import { StyledQuestionBox } from '../styled'

export default function QuestionBox ({ questions, activeQuestion }) {
  const { body = null } = questions[activeQuestion]
  return body && <StyledQuestionBox>{body}</StyledQuestionBox>
}

// rename THIS component as Question
// then in QuestionBox pass only the components and styled components <Question> <QuestionCounter>
