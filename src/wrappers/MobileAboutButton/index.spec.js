import React from 'react'
import { shallow } from 'enzyme'

import MobileAboutButton from '.'

describe('components:wrappers:MobileAboutButton', () => {
  it('renders the MobileAboutButton and CSS properties properly', () => {
    expect(toJson(shallow(<MobileAboutButton />))).toMatchSnapshot()
  })
})
