import React from 'react'
import { shallow } from 'enzyme'

import Checkup from '.'

describe('components:App', () => {
  it('renders the App with a blank game board and nine squares', () => {
    expect(toJson(shallow(<Checkup />).dive())).toMatchSnapshot()
  })
})
