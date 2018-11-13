import React from 'react'
import StyledDesktopButton from '../DesktopButton'

export default function DesktopButtonAbout () {
  return (
    <StyledDesktopButton
      onClick={() => {
        window.open('http://www.wclc.org.nz/about-us/', '_blank')
      }}
    >
      About Community Law
    </StyledDesktopButton>
  )
}
