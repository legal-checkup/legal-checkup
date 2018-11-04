import React from 'react'
import { StyledLogo } from '../styled'
import { Link } from 'react-router'

export default function Logo () {
  return (
    <StyledLogo>
      <Link to='./images/cl_logo.png' alt=''>
        Home
      </Link>
    </StyledLogo>
  )
}
