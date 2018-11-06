import React from 'react'

import { shallow } from 'enzyme'

import PreviousButton from './'

describe('components:styled:PreviousButton', () => {
  it('renders the PreviousButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<PreviousButton>Click Me</PreviousButton>))
    ).toMatchSnapshot()
  })
  it('renders the PreviousButton and CSS properties properly when enabled', () => {
    expect(
      toJson(shallow(<PreviousButton enabled>Click Me!</PreviousButton>))
    ).toMatchSnapshot()
  })
})
