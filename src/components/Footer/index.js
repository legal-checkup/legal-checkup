import React from 'react'
import { StyledFooter, StyledFooterLink } from '../styled'

export default function Footer () {
  return (
    <div>
      <StyledFooter>
        <StyledFooterLink href='/privacy-policy'>
          Privacy Policy
        </StyledFooterLink>

        <StyledFooterLink href='/terms-of-use'>Terms of Use</StyledFooterLink>
      </StyledFooter>
    </div>
  )
}
