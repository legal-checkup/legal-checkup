import React, { Fragment } from 'react'

import StyledYesButton from '../styled/Button/YesButton'

export default function YesButton ({ handleClick }) {
  return (
    <Fragment>
      <StyledYesButton onClick={handleClick}>Yes</StyledYesButton>
    </Fragment>
  )
}
