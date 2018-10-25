import React from 'react'
import { shallow } from 'enzyme'

import DesktopFooterLink from '.'

describe('components:styled:DesktopFooterLink', function () {
  it('renders the DesktopFooterLink and CSS properties properly', () =>
    expect(toJson(shallow(<DesktopFooterLink />))).toMatchSnapshot())
})
