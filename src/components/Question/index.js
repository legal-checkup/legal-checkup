import React from 'react'

import { StyledQuestion } from '../styled'

export default function Question ({
  answeredTotal,
  currentNumber,
  questionNumber
}) {
  if (questionNumber === currentNumber) {
    return (
      <StyledQuestion key={questionNumber} active>
        {questionNumber}
      </StyledQuestion>
    )
  }

  if (questionNumber <= answeredTotal) {
    return (
      <StyledQuestion key={questionNumber} answered>
        {questionNumber}
      </StyledQuestion>
    )
  }

  return (
    <StyledQuestion key={questionNumber} disabled>
      {questionNumber}
    </StyledQuestion>
  )
}
