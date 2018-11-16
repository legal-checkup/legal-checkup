import React from 'react'
import { shallow } from 'enzyme'
import MobileButtonServices from '.'

describe('components:MobileButtonServices', () => {
  it('renders the MobileButtonServices and CSS properties properly', () => {
    expect(toJson(shallow(<MobileButtonServices />))).toMatchSnapshot()
  })
})
