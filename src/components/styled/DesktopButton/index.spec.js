import React from 'react'
import { shallow } from 'enzyme'

import StyledDesktopButton from '.'

describe('components:styled:DesktopButton', () => {
  it('renders the StyledDesktopButton and CSS properties properly', () => {
    expect(toJson(shallow(<StyledDesktopButton />))).toMatchSnapshot()
  })
})
