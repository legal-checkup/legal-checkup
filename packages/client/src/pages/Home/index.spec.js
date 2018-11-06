import React from 'react'
import { shallow } from 'enzyme'

import Home from './'

describe('components:Home', () => {
  it('renders the Home page', () => {
    expect(toJson(shallow(<Home />).dive())).toMatchSnapshot()
  })
})
