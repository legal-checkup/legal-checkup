import React from 'react'
import { shallow } from 'enzyme'

import QuestionNumber from '.'

describe('components:Question', () => {
  it('renders the Question and CSS properties properly when active', () => {
    expect(
      toJson(
        shallow(
          <QuestionNumber answered={2} current={2} question={2} total={3} />
        )
      )
    ).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when answered', () => {
    expect(
      toJson(
        shallow(
          <QuestionNumber answered={2} current={2} question={1} total={3} />
        )
      )
    ).toMatchSnapshot()
  })

  it('renders the Question and CSS properties properly when not current or answered', () => {
    expect(
      toJson(
        shallow(
          <QuestionNumber answered={2} current={2} question={3} total={3} />
        )
      )
    ).toMatchSnapshot()
  })
})
