import React from 'react'
import { shallow } from 'enzyme'

import Layout from '.'

describe('components:styled:Layout', function () {
  it('renders the Layout and CSS properties properly', () =>
    expect(toJson(shallow(<Layout>StyledLayout</Layout>))).toMatchSnapshot())
})
