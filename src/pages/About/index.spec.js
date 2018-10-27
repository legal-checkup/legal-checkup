import React from 'react'
import { shallow } from 'enzyme'

import About from '.'

describe('pages:About', () => {
  it('renders the About page', () => {
    expect(toJson(shallow(<About />).dive())).toMatchSnapshot()
  })
})
