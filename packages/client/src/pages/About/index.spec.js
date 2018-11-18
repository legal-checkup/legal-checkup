import * as React from 'react'
import { create } from 'react-test-renderer'

import About from './'

describe('pages:About', () => {
  it('renders the About page', () => {
    expect(create(<About />).toJSON()).toMatchSnapshot()
  })
})
