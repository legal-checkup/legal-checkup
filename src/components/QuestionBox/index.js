import React from 'react'
import { StyledQuestionBox } from '../styled'
import { handleFalsy } from '../../utilities'

export default function QuestionBox ({ body }) {
  const out = handleFalsy(body, <StyledQuestionBox>{body}</StyledQuestionBox>)

  console.log('out', out)

  return out
}
