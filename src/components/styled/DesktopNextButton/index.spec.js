import React from 'react'
import { shallow } from 'enzyme'

import DesktopNextButton from '.'

describe('components:styled:DesktopNextButton', () => {
  it('renders the DesktopNextButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<DesktopNextButton>Click Me!</DesktopNextButton>))
    ).toMatchSnapshot()
  })
  it('renders the DesktopNextButton and CSS properties properly when enabled', () => {
    expect(
      toJson(shallow(<DesktopNextButton enabled>Click Me!</DesktopNextButton>))
    ).toMatchSnapshot()
  })
})
