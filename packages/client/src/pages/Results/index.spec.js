import React from 'react'
import { shallow } from 'enzyme'

import Results from '.'

describe('components:Results', () => {
  it('renders the Results page', () => {
    expect(toJson(shallow(<Results />))).toMatchSnapshot()
  })
})
