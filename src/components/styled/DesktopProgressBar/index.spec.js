import React from 'react'
import { shallow } from 'enzyme'

import DesktopProgressBar from '.'

describe('components:styled:DesktopProgressBar', () => {
  it('renders the DesktopProgressBar and CSS properties properly', () => {
    expect(toJson(shallow(<DesktopProgressBar />))).toMatchSnapshot()
  })
})
