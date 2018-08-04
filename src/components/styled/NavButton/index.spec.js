import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '.'

describe('components:styled:NavButton', () => {
  it('renders the NavButton and CSS properties properly', () => {
    expect(toJson(shallow(<NavButton />))).toMatchSnapshot()
  })
})
