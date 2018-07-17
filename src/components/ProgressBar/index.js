import React from 'react'
import { times } from 'ramda'

import { Question } from '..'
import { StyledProgressBar } from '../styled'

function makeQuestions (total) {
  return times(idx => {
    const num = idx + 1

    return (
      <Question key={num} question={num}>
        {num}
      </Question>
    )
  }, total)
}

export default function ProgressBar ({ total }) {
  return <StyledProgressBar>{makeQuestions(total)}</StyledProgressBar>
}
