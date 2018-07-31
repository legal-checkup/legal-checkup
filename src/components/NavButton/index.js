import React from 'react'

import { StyledNavButton } from '../styled'

export default function NavButton ({ answered, current, type }) {
  if (type === 'back') {
    return current > 1 ? (
      <StyledNavButton type={type}>&lt;</StyledNavButton>
    ) : (
      <StyledNavButton type={type} disabled>
        &lt;
      </StyledNavButton>
    )
  }

  if (type === 'forward') {
    return current < answered ? (
      <StyledNavButton type={type}>&gt;</StyledNavButton>
    ) : (
      <StyledNavButton type={type} disabled>
        &gt;
      </StyledNavButton>
    )
  }

  return <StyledNavButton />
}
