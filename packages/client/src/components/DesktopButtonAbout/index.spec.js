import React from 'react'
import { shallow } from 'enzyme'
import DesktopButtonAbout from '.'

describe('components:DesktopButtonAbout', () => {
  it('renders the DesktopButtonAbout and CSS properties properly', () => {
    expect(toJson(shallow(<DesktopButtonAbout />))).toMatchSnapshot()
  })
})
