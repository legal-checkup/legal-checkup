import React from 'react'
import { StyledQuestionBox } from '../styled'

export default function QuestionBox ({ questions, activeQuestion }) {
  return <StyledQuestionBox>{questions[activeQuestion].body}</StyledQuestionBox>
}
/* check where to pass question box component to be rendered
  it goes through the home page or checkup page?
  */
