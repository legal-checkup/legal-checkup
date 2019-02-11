import * as React from 'react'
import { create } from 'react-test-renderer'

import Home from './'

describe('pages:Home', () => {
  it('renders the Home page', () => {
    expect(create(<Home />).toJSON()).toMatchSnapshot()
  })
})
