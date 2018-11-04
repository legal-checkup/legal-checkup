import React from 'react'
import { shallow } from 'enzyme'

import StyledMobileButton from '.'

describe('components:styled:MobileButton', () => {
  it('renders the StyledMobileButton and CSS properties properly', () => {
    expect(toJson(shallow(<StyledMobileButton />))).toMatchSnapshot()
  })
})
