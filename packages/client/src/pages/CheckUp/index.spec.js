import * as React from 'react'
import { create } from 'react-test-renderer'

import Checkup from './'

describe('pages:Checkup', () => {
  it('renders the Checkup page', () => {
    expect(create(<Checkup />).toJSON()).toMatchSnapshot()
  })
})
