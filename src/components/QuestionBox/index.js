import React from 'react'
import StyledQuestionBox from '../styled/QuestionBox'
import handleFalsy from '../../utilities/handleFalsy'

export default function QuestionBox ({ body }) {
  const out = handleFalsy(body, <StyledQuestionBox>{body}</StyledQuestionBox>)

  return out
}
