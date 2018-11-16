import React from 'react'
import { shallow } from 'enzyme'

import Results from './'

describe('pages:Results', () => {
  it('renders the Results page', () => {
    expect(toJson(shallow(<Results />))).toMatchSnapshot()
  })
})
