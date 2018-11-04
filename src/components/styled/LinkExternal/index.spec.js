import React from 'react'
import { shallow } from 'enzyme'

import LinkExternal from '.'

describe('components:styled:LinkExternal', () => {
  it('renders the LinkExternal and CSS properties properly', () => {
    expect(toJson(shallow(<LinkExternal />))).toMatchSnapshot()
  })
})
