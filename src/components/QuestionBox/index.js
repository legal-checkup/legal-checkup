import React from 'react'
import { StyledQuestionBox } from '../styled'

import { handleFalsy } from '../../utilities'

export default function QuestionBox ({ body }) {
  return handleFalsy(body, <StyledQuestionBox>{body}</StyledQuestionBox>)
}
