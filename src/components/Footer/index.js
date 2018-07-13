import React from 'react'
import { StyledFooter, StyledLink } from '../styled'

export default function Footer () {
  return (
    <StyledFooter>
      <div>
        <StyledLink href='/privacy-policy'>Privacy Policy</StyledLink>
        {` `}
        <StyledLink href='/terms-of-use'>Terms of Use</StyledLink>
      </div>
    </StyledFooter>
  )
}
