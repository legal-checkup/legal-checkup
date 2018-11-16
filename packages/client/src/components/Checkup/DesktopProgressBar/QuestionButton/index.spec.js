import React from 'react'

import { shallow } from 'enzyme'

import QuestionButton from './'

describe('components:styled:QuestionButton', () => {
  it('renders the QuestionButton and CSS properties properly', () => {
    expect(
      toJson(shallow(<QuestionButton>Click Me</QuestionButton>))
    ).toMatchSnapshot()
  })
  it('renders the QuestionButton and CSS properties properly when enabled', () => {
    expect(
      toJson(shallow(<QuestionButton enabled>Click Me!</QuestionButton>))
    ).toMatchSnapshot()
  })
})
