import React from 'react'
import { not } from 'ramda'

function handleFalsy (check, value) {
  return not(check) ? null : value
}

export default handleFalsy
