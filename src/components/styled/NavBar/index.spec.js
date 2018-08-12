import React from 'react'
import { shallow } from 'enzyme'

import NavBar from '.'

describe('components:styled:NavBar', function () {
  it('renders the NavBar and CSS properties properly', () =>
    expect(toJson(shallow(<NavBar>NavBar</NavBar>))).toMatchSnapshot())
})
