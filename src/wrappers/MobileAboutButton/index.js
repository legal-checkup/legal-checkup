import React from 'react'
import StyledMobileButton from '@components/styled/MobileButton'

export default function MobileAboutButton () {
  return (
    <StyledMobileButton
      onClick={() => {
        window.open('http://www.wclc.org.nz/about-us/', '_blank')
      }}
    >
      About Community Law
    </StyledMobileButton>
  )
}
