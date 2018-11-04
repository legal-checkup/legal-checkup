import React from 'react'
import { shallow } from 'enzyme'

import DesktopAboutButton from '.'

describe('components:wrappers:DesktopAboutButton', () => {
  it('renders the DesktopAboutButton and CSS properties properly', () => {
    expect(toJson(shallow(<DesktopAboutButton />))).toMatchSnapshot()
  })
})
