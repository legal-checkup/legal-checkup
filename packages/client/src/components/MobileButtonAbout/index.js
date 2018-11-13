import React from 'react'
import StyledMobileButton from '../MobileButton'
export default function MobileButtonAbout () {
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
