import * as React from 'react'
import { create } from 'react-test-renderer'

import Wrapper from './'

describe('components:layout:Header:Wrapper', () => {
  it('renders the Header and CSS properties properly', () => {
    expect(create(<Wrapper>Wrapper</Wrapper>).toJSON()).toMatchSnapshot()
  })
})
