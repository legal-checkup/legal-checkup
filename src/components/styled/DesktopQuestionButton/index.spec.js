import React from 'react'
import { shallow } from 'enzyme'

import DesktopQuestionButton from '.'

describe('components:styled:DesktopQuestionButton', () => {
  it('renders the DesktopQuestionButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<DesktopQuestionButton>Click Me</DesktopQuestionButton>))
    ).toMatchSnapshot()
  })
  it('renders the DesktopQuestionButton and CSS properties properly when enabled', () => {
    expect(
      toJson(
        shallow(
          <DesktopQuestionButton enabled>Click Me!</DesktopQuestionButton>
        )
      )
    ).toMatchSnapshot()
  })
  it('renders the DesktopQuestionButton and CSS properties properly when active', () => {
    expect(
      toJson(
        shallow(<DesktopQuestionButton active>Click Me!</DesktopQuestionButton>)
      )
    ).toMatchSnapshot()
  })
})
