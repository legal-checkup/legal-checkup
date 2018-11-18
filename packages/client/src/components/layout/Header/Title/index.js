import * as React from 'react'

import Checkup from './Checkup'
import Legal from './Legal'
import Wrapper from './Wrapper'

export default function Title () {
  return (
    <Wrapper>
      <Legal>Legal</Legal>
      <Checkup>Checkup</Checkup>
    </Wrapper>
  )
}
