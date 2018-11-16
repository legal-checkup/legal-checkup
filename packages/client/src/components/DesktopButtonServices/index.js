import React from 'react'
import StyledDesktopButton from '../DesktopButton'

export default function DesktopButtonServices () {
  return (
    <StyledDesktopButton
      onClick={() => {
        window.open('http://www.wclc.org.nz/our-services/', '_blank')
      }}
    >
      Community Law Services
    </StyledDesktopButton>
  )
}
