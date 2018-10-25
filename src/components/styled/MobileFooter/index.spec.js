import React from 'react'
import { shallow } from 'enzyme'

import MobileFooter from '.'

describe('components:styled:MobileFooter', function () {
  it('renders the MobileFooter and CSS properties properly', () =>
    expect(toJson(shallow(<MobileFooter />))).toMatchSnapshot())
})
