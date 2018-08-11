import React from 'react'
import { shallow } from 'enzyme'

import NavButtonBack from '.'

describe('components:styled:NavButton:NavButtonBack', () => {
  it('renders the Back and CSS properties properly', () => {
    expect(
      toJson(shallow(<NavButtonBack>&#x25C0;</NavButtonBack>))
    ).toMatchSnapshot()
  })
})
