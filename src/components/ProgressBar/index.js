import React from 'react'
import { times } from 'ramda'

import { Question } from '..'
import { StyledProgressBar } from '../styled'

function makeQuestions (answered, current, total) {
  return times(idx => {
    const question = ++idx

    return (
      <Question
        key={question}
        answered={answered}
        current={current}
        question={question}
      >
        {question}
      </Question>
    )
  }, total)
}

export default function ProgressBar ({ answered = 2, current = 2, total = 3 }) {
  return (
    <StyledProgressBar>
      {makeQuestions(answered, current, total)}
    </StyledProgressBar>
  )
}
