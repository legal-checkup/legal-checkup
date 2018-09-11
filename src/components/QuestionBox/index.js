import React from 'react'
import { StyledQuestionBox } from '../styled'

import { handleFalsy } from '../../utilities'

export default function QuestionBox ({ questions, activeQuestion }) {
  const { body } = questions[activeQuestion]

  return handleFalsy(body, <StyledQuestionBox>{body}</StyledQuestionBox>)
}

// rename THIS component as Question
// then in QuestionBox pass only the components and styled components <Question> <QuestionCounter>
