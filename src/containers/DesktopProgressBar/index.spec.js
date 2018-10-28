import React from 'react'
import { shallow } from 'enzyme'
import DesktopProgressBar from '.'

describe('containers:DesktopProgressBar', () => {
  it('renders the DesktopProgressBar', () => {
    expect(toJson(shallow(<DesktopProgressBar />))).toMatchSnapshot()
  })
})
