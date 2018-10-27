import React from 'react'
import { shallow } from 'enzyme'

import MobileNextButton from '.'

describe('components:styled:MobileNextButton', () => {
  it('renders the MobileNextButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<MobileNextButton>Click Me</MobileNextButton>))
    ).toMatchSnapshot()
  })
  it('renders the MobileNextButton and CSS properties properly when enabled', () => {
    expect(
      toJson(shallow(<MobileNextButton enabled>Click Me!</MobileNextButton>))
    ).toMatchSnapshot()
  })
})
