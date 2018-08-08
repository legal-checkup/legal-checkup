import React, { Fragment } from 'react'

import { StyledButton } from '../styled'

export default function Button () {
  return (
    <Fragment>
      <StyledButton>{this.props.color}</StyledButton>
    </Fragment>
  )
}
