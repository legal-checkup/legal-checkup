import React from 'react'

import { StyledMobileProgressBar } from '../styled'
import {
  CurrentTopic,
  ConnectedNavButtonBack,
  ConnectedNavButtonForward
} from '../../containers'

export default function MobileProgressBar () {
  return (
    <StyledMobileProgressBar>
      <ConnectedNavButtonBack>◀</ConnectedNavButtonBack>
      <CurrentTopic />
      <ConnectedNavButtonForward>▶</ConnectedNavButtonForward>
    </StyledMobileProgressBar>
  )
}
