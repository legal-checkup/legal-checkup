import ConnectedNavButtonBack from '../../containers/NavButtonBack'
import ConnectedNavButtonForward from '../../containers/NavButtonForward'
import CurrentTopic from '../../containers/CurrentTopic'
import React from 'react'
import StyledMobileProgressBar from '../styled/MobileProgressBar'

export default function MobileProgressBar () {
  return (
    <StyledMobileProgressBar>
      <ConnectedNavButtonBack>◀</ConnectedNavButtonBack>
      <CurrentTopic />
      <ConnectedNavButtonForward>▶</ConnectedNavButtonForward>
    </StyledMobileProgressBar>
  )
}
