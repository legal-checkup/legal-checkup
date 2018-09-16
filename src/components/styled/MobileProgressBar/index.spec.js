import React from 'react'
import { shallow } from 'enzyme'

import MobileProgressBar from '.'

describe('components:styled:MobileProgressBar', () => {
  it('renders the MobileProgressBar and CSS properties properly', () => {
    expect(
      toJson(shallow(<MobileProgressBar>MobileProgressBar</MobileProgressBar>))
    ).toMatchSnapshot()
  })
})
