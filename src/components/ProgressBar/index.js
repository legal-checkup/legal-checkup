import React from 'react'
import { times } from 'ramda'

import { Question } from '..'
import { StyledProgressBar } from '../styled'

function makeQuestions (total) {
  return times(idx => {
    const question = ++idx

    return (
      <Question key={question} question={question}>
        {question}
      </Question>
    )
  }, total)
}

export default function ProgressBar ({ total }) {
  return <StyledProgressBar>{makeQuestions(total)}</StyledProgressBar>
}
