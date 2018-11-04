import React from 'react'
import { shallow } from 'enzyme'

import DesktopServicesButton from '.'

describe('components:wrappers:DesktopServicesButton', () => {
  it('renders the DesktopServicesButton and CSS properties properly', () => {
    expect(toJson(shallow(<DesktopServicesButton />))).toMatchSnapshot()
  })
})
