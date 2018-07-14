import React from 'react'
import { shallow } from 'enzyme'

import Link from '.'

describe('components:styled:Link', function () {
  it('renders the Link and CSS properties properly', () =>
    expect(toJson(shallow(<Link>StyledLink</Link>))).toMatchSnapshot())
})
