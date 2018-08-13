import React from 'react'

import { StyledProgressBar } from '../styled'
import {
  CurrentTopic,
  ConnectedNavButtonBack,
  ConnectedNavButtonForward
} from '../../containers'

export default function ProgressBar () {
  return (
    <StyledProgressBar>
      <ConnectedNavButtonBack>&#x25C0;</ConnectedNavButtonBack>
      <CurrentTopic />
      <ConnectedNavButtonForward>&#x25B6;</ConnectedNavButtonForward>
    </StyledProgressBar>
  )
}
