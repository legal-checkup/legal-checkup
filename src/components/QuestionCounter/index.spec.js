import React from 'react'
import { shallow } from 'enzyme'
import QuestionCounter from '.'

describe(`components:QuestionCounter`, () => {
  it(`renders the the correct QuestionCount`, () =>
    expect(
      toJson(shallow(<QuestionCounter>QuestionCounter</QuestionCounter>))
    ).toMatchSnapshot())
})
