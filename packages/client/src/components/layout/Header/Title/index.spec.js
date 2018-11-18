import * as React from 'react'
import { create } from 'react-test-renderer'

import Title from './'

describe('components:layout:Header:Title', () => {
  it('matches the snapshot', () => {
    expect(create(<Title>Title</Title>).toJSON()).toMatchSnapshot()
  })
})
