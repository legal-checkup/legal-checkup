import * as React from 'react'
import { create } from 'react-test-renderer'

import Help from './'

describe('pages:Help', () => {
  it('renders the Help page', () => {
    expect(create(<Help />).toJSON()).toMatchSnapshot()
  })
})
