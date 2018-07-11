import React from 'react'
import { shallow } from 'enzyme'

import Layout from '.'

describe('components:Layout', function () {
  it('renders the Layout and CSS properties properly', () =>
    expect(toJson(shallow(<Layout>Layout</Layout>))).toMatchSnapshot())
})
