import React from 'react'
import { shallow } from 'enzyme'

import MobilePreviousButton from '.'

describe('components:styled:MobilePreviousButton', () => {
  it('renders the MobilePreviousButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<MobilePreviousButton>Click Me</MobilePreviousButton>))
    ).toMatchSnapshot()
  })
  it('renders the MobilePreviousButton and CSS properties properly when enabled', () => {
    expect(
      toJson(
        shallow(<MobilePreviousButton enabled>Click Me!</MobilePreviousButton>)
      )
    ).toMatchSnapshot()
  })
})
