import React from 'react'
import StyledMobileButton from '../MobileButton'

export default function MobileButtonServices () {
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
