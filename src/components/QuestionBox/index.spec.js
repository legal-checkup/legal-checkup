import React from 'react'
import { shallow } from 'enzyme'
import QuestionBox from '.'

describe('components:QuestionBox', () => {
  it(`renders the QuestionBox component when a question is provided`, () =>
    expect(
      toJson(shallow(<QuestionBox>QuestionBox</QuestionBox>))
    ).toMatchSnapshot())
})
