import React from 'react'
import {
  ConnectedNoButton,
  ConnectedYesButton,
  ConnectedNotSureButton
} from '../../containers'
import { StyledAnswerBar } from '../styled'

export default function AnswerBar () {
  return (
    <StyledAnswerBar>
      <ConnectedYesButton />
      <ConnectedNoButton />
      <ConnectedNotSureButton />
    </StyledAnswerBar>
  )
}
