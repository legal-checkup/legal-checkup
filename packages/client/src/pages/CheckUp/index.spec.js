import React from 'react'
import { shallow } from 'enzyme'

import Checkup from './'

describe('components:Checkup', () => {
  it('renders the Checkup page', () => {
    expect(toJson(shallow(<Checkup />).dive())).toMatchSnapshot()
  })
})
