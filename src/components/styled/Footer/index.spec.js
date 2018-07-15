import React from 'react'
import { shallow } from 'enzyme'

import Footer from '.'

describe('components:styled:Footer', function () {
  it('renders the Footer and CSS properties properly', () =>
    expect(toJson(shallow(<Footer>Footer</Footer>))).toMatchSnapshot())
})
