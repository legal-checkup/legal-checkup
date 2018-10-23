import React from 'react'
import { shallow } from 'enzyme'

import DesktopProgressBar from '.'

describe('containers:DestopProgressBar', () => {
  it('renders the DesktopProgressBar correctly', () => {
    expect(toJson(shallow(<DesktopProgressBar />))).toMatchSnapshot()
  })
})
