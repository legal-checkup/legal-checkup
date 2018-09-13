import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '.'

describe('components:styled:NavButton', function () {
  it('renders the NavButton and CSS properties properly', () =>
    expect(toJson(shallow(<NavButton>NavButton</NavButton>))).toMatchSnapshot())
})
