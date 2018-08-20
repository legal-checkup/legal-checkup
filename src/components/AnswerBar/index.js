import React from 'react'
import YesButton from '../YesButton'
import NoButton from '../NoButton'
import NotSureButton from '../NotSureButton'
import { StyledAnswerBar } from '../styled'

function handleClick (e) {
  e.preventDefault()
  console.log('The link was clicked.')
}

function handleYesClick (e) {
  e.preventDefault()
  console.log('Yes')
}

export default function AnswerBar () {
  return (
    <StyledAnswerBar>
      <YesButton onClick={handleYesClick} />
      <NoButton />
      <NotSureButton />
    </StyledAnswerBar>
  )
}
