import * as React from 'react'

import Checkup from './Checkup'
import Legal from './Legal'
import Wrapper from './Wrapper'

export default function Title ({ format }) {
  return (
    <Wrapper format={format}>
      <Legal>Legal</Legal>
      <Checkup format={format}>Checkup</Checkup>
    </Wrapper>
  )
}
