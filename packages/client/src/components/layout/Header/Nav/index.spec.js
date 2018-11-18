import * as React from 'react'
import { create } from 'react-test-renderer'

import Nav from './'

describe('components:layout:Header:Nav', () => {
  it('matches the snapshot', () => {
    expect(create(<Nav>Nav</Nav>).toJSON()).toMatchSnapshot()
  })
})
