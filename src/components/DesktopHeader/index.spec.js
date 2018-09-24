import React from 'react'
import { shallow } from 'enzyme'

import DesktopHeader from '.'

describe('components:DesktopHeader', () => {
  it('renders the DesktopHeader component with the correct CSS', () => {
    expect(toJson(shallow(<DesktopHeader />))).toMatchSnapshot()
  })
})
