import React from 'react'
import StyledDesktopButton from '@components/styled/DesktopButton'

export default function DesktopAboutButton () {
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
