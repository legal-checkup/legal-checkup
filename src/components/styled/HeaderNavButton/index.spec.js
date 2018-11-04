import React from 'react'
import { shallow } from 'enzyme'

import HeaderNavButton from '.'

describe('components:styled:HeaderNavButton', function () {
  it('renders the HeaderNavButton and CSS properties properly', () =>
    expect(
      toJson(shallow(<HeaderNavButton>NavButton</HeaderNavButton>))
    ).toMatchSnapshot())
})
