import React from 'react'
import { shallow } from 'enzyme'

import DesktopFooter from '.'

describe('components:styled:DesktopFooter', function () {
  it('renders the DesktopFooter and CSS properties properly', () =>
    expect(toJson(shallow(<DesktopFooter />))).toMatchSnapshot())
})
