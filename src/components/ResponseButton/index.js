import React from 'react'
import StyledResponseButton from '../styled/ResponseButton'

export default function ButtonResponse ({ handleClick, type }) {
  return <StyledResponseButton onClick={handleClick} type={type} />
}
