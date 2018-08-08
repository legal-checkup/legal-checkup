import React from 'react'
import { shallow } from 'enzyme'

import Logo from '.'

describe('components:Logo', function () {
  it('renders the Logo and CSS properties properly', () =>
    expect(toJson(shallow(<Logo>Logo</Logo>))).toMatchSnapshot())
})
