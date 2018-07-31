import React from 'react'
import { times } from 'ramda'

import { QuestionNumber } from '..'
import { StyledProgressBar } from '../styled'

function makeQuestions (total) {
  return times(idx => {
    const num = idx + 1

    return (
      <QuestionNumber key={num} question={num}>
        {num}
      </QuestionNumber>
    )
  }, total)
}

export default function ProgressBar ({ total }) {
  return <StyledProgressBar>{makeQuestions(total)}</StyledProgressBar>
}
