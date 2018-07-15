import React from 'react'

import { StyledQuestion } from '../styled'

export default function Question ({ answered, current, question }) {
  if (question === current) {
    return (
      <StyledQuestion key={question} active>
        {question}
      </StyledQuestion>
    )
  }

  if (question <= answered) {
    return (
      <StyledQuestion key={question} answered>
        {question}
      </StyledQuestion>
    )
  }

  return (
    <StyledQuestion key={question} disabled>
      {question}
    </StyledQuestion>
  )
}
