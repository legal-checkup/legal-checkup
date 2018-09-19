import React from 'react'
import { shallow } from 'enzyme'

import NavButtonForward from '.'

describe('components:styled:NavButton:NavButtonForward', () => {
  it('renders the Back and CSS properties properly', () => {
    expect(
      toJson(shallow(<NavButtonForward>&#x25B6;</NavButtonForward>))
    ).toMatchSnapshot()
  })
})
