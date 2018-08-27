import React from 'react'
import YesButton from '../YesButton'
import NoButton from '../NoButton'
import NotSureButton from '../NotSureButton'
import { StyledAnswerBar } from '../styled'

export default function AnswerBar () {
  return (
    <StyledAnswerBar>
      <YesButton />
      <NoButton />
      <NotSureButton />
    </StyledAnswerBar>
  )
}
