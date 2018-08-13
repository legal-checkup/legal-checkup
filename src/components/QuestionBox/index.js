import React from 'react'
import { StyledQuestionBox } from '../styled'

export default function QuestionBox ({ questions, activeQuestion }) {
  const { body } = questions[activeQuestion]
  return body && <StyledQuestionBox>{body}</StyledQuestionBox>
}
