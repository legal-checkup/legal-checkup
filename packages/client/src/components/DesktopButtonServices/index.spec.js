import React from 'react'
import { shallow } from 'enzyme'
import DesktopButtonServices from '.'

describe('components:DesktopButtonServices', () => {
  it('renders the DesktopButtonServices and CSS properties properly', () => {
    expect(toJson(shallow(<DesktopButtonServices />))).toMatchSnapshot()
  })
})
