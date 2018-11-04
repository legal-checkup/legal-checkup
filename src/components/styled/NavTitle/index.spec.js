import React from 'react'
import { shallow } from 'enzyme'

import NavTitle from '.'

describe('components:styled:NavTitle', function () {
  it('renders the NavTitle and CSS properties properly', () =>
    expect(toJson(shallow(<NavTitle>NavButton</NavTitle>))).toMatchSnapshot())
})
