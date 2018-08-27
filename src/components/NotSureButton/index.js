import React, { Fragment } from 'react'

import StyledNotSureButton from '../styled/Button/NotSureButton'

export default function NotSureButton ({ handleClick }) {
  return (
    <Fragment>
      <StyledNotSureButton onClick={handleClick}>Not sure</StyledNotSureButton>
    </Fragment>
  )
}
