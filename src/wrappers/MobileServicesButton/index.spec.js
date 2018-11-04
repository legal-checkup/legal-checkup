import React from 'react'
import { shallow } from 'enzyme'

import MobileServicesButton from '.'

describe('components:wrappers:MobileServicesButton', () => {
  it('renders the MobileServicesButton and CSS properties properly', () => {
    expect(toJson(shallow(<MobileServicesButton />))).toMatchSnapshot()
  })
})
