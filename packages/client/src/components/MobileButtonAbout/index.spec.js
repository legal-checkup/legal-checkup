import React from 'react'
import { shallow } from 'enzyme'
import MobileButtonAbout from '.'

describe('components:MobileButtonAbout', () => {
  it('renders the MobileButtonAbout and CSS properties properly', () => {
    expect(toJson(shallow(<MobileButtonAbout />))).toMatchSnapshot()
  })
})
