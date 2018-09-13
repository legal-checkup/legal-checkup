import QuestionBox from '.'
import React from 'react'
import { shallow } from 'enzyme'

describe('components:QuestionBox', () => {
  it(`renders the QuestionBox component when a question is provided`, () => {
    const body = 'Is anyone chasing you for money?'

    expect(shallow(<QuestionBox body={body} />)).toMatchSnapshot()
  })

  it(`returns null when a question is not provided`, () => {
    expect(shallow(<QuestionBox />)).toBeNull()
  })
})
