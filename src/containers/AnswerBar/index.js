import { NO, NOT_SURE, YES } from '@state/constants'

import React from 'react'
import ResponseButton from '../ResponseButton'
import StyledAnswerBar from '@components/styled/AnswerBar'

export default function AnswerBar () {
  return (
    <StyledAnswerBar>
      <ResponseButton type={YES} />
      <ResponseButton type={NO} />
      <ResponseButton type={NOT_SURE} />
    </StyledAnswerBar>
  )
}
