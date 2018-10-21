import React from 'react'
import { shallow } from 'enzyme'

import DesktopQuestionButton from '.'

describe('components:styled:DesktopQuestionButton', () => {
  it('renders the DesktopQuestionButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<DesktopQuestionButton>Click Me</DesktopQuestionButton>))
    ).toMatchSnapshot()
  })
})
