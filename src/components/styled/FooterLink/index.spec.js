import React from 'react'
import { shallow } from 'enzyme'

import FooterLink from '.'

describe('components:styled:FooterLink', function () {
  it('renders the FooterLink and CSS properties properly', () =>
    expect(
      toJson(shallow(<FooterLink>FooterLink</FooterLink>))
    ).toMatchSnapshot())
})
