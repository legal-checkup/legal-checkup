import ConnectedNoButton from '../../containers/NoButton'
import ConnectedNotSureButton from '../../containers/NotSureButton'
import ConnectedYesButton from '../../containers/YesButton'
import React from 'react'
import StyledAnswerBar from '../styled/AnswerBar'

export default function AnswerBar () {
  return (
    <StyledAnswerBar>
      <ConnectedYesButton />
      <ConnectedNoButton />
      <ConnectedNotSureButton />
    </StyledAnswerBar>
  )
}
