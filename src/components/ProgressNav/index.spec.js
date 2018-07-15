import React from 'react'
import { shallow } from 'enzyme'

import ProgressNav from '.'

describe('components:ProgressNav', () => {
  it('renders the Progressnav and CSS properties properly', () => {
    expect(toJson(shallow(<ProgressNav />))).toMatchSnapshot()
  })
})
