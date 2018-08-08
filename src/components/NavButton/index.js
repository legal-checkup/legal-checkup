import React from 'react'

import { StyledNavButton } from '../styled'

export default function NavButton ({
  children,
  direction,
  handleClick,
  unlocked
}) {
  return unlocked ? (
    <StyledNavButton direction={direction} onClick={handleClick}>
      {children}
    </StyledNavButton>
  ) : (
    <StyledNavButton direction={direction}>{children}</StyledNavButton>
  )
}
