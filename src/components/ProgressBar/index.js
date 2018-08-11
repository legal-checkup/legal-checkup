import React from 'react'

import { StyledProgressBar } from '../styled'
import { CurrentTopic, NavButtonBack, NavButtonForward } from '../../containers'

export default function ProgressBar () {
  return (
    <StyledProgressBar>
      <NavButtonBack>&#x25C0;</NavButtonBack>
      <CurrentTopic />
      <NavButtonForward>&#x25B6;</NavButtonForward>
    </StyledProgressBar>
  )
}
