import React from 'react'
import { shallow } from 'enzyme'

import Help from '.'

describe('pages:Help', () => {
  it('renders the Help page', () => {
    expect(toJson(shallow(<Help />).dive())).toMatchSnapshot()
  })
})
