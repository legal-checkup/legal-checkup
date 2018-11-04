import React from 'react'
import StyledMobileButton from '@components/styled/MobileButton'

export default function MobileServicesButton () {
  return (
    <StyledMobileButton
      onClick={() => {
        window.open('http://www.wclc.org.nz/our-services/', '_blank')
      }}
    >
      Community Law Services
    </StyledMobileButton>
  )
}
