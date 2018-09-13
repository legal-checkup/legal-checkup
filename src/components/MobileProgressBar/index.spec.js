import React from 'react'
import { shallow } from 'enzyme'

import MobileProgressBar from '.'

describe('components:MobileProgressBar', function () {
  it('renders the MobileProgressBar and CSS properties properly', () =>
    expect(toJson(shallow(<MobileProgressBar />))).toMatchSnapshot())
})
