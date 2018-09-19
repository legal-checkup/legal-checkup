import React, { Fragment } from 'react'

import StyledNoButton from '../styled/Button/NoButton'

export default function NoButton ({ handleClick }) {
  return (
    <Fragment>
      <StyledNoButton onClick={handleClick}>No</StyledNoButton>
    </Fragment>
  )
}
