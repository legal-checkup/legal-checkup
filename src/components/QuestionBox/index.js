import React from 'react'
import { StyledQuestionBox } from '../styled'

export default function QuestionBox ({ questions, activeQuestion }) {
  const { body = null } = questions[activeQuestion]
  return body && <StyledQuestionBox>{body}</StyledQuestionBox>
}
