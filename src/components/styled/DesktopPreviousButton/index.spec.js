import React from 'react'
import { shallow } from 'enzyme'

import DesktopPreviousButton from '.'

describe('components:styled:DesktopPreviousButton', () => {
  it('renders the DesktopPreviousButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<DesktopPreviousButton>Click Me</DesktopPreviousButton>))
    ).toMatchSnapshot()
  })
  it('renders the DesktopPreviousButton and CSS properties properly when enabled', () => {
    expect(
      toJson(
        shallow(
          <DesktopPreviousButton enabled>Click Me!</DesktopPreviousButton>
        )
      )
    ).toMatchSnapshot()
  })
})
