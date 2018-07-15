import React from 'react'
import { shallow } from 'enzyme'

import Question from '.'

describe('components:Question', () => {
  it('renders the Question and CSS properties properly when active', () => {
    expect(
      toJson(
        shallow(
          <Question answered={2} current={2} question={2} total={3}>
            Question
          </Question>
        )
      )
    ).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when answered', () => {
    expect(
      toJson(
        shallow(
          <Question answered={2} current={2} question={1} total={3}>
            Question
          </Question>
        )
      )
    ).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when not current or answered', () => {
    expect(
      toJson(
        shallow(
          <Question answered={2} current={2} question={3} total={3}>
            Question
          </Question>
        )
      )
    ).toMatchSnapshot()
  })
})
