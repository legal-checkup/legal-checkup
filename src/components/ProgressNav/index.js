import React from 'react'

import { NavButton, ProgressBar } from '..'
import { StyledProgressNav } from '../styled'

export default function ProgressNav () {
  return (
    <StyledProgressNav>
      <NavButton type='back' />
      <ProgressBar />
      <NavButton type='forward' />
    </StyledProgressNav>
  )
}
