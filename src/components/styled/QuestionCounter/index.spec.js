import React from 'react'
import { shallow } from 'enzyme'

import QuestionCounter from '.'

describe('components:styled:QuestionCounter', () => {
  it('renders the QuestionCounter and CSS properties properly', () => {
    expect(
      toJson(shallow(<QuestionCounter>Text</QuestionCounter>))
    ).toMatchSnapshot()
  })
})
