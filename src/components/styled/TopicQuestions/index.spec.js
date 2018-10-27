import React from 'react'
import { shallow } from 'enzyme'

import TopicQuestions from '.'

describe('components:styled:TopicQuestions', () => {
  it('renders the TopicQuestions and CSS properties properly', () => {
    expect(
      toJson(shallow(<TopicQuestions>Topic questions</TopicQuestions>))
    ).toMatchSnapshot()
  })
  it('renders the TopicQuestions and CSS properties properly when activeTopic', () => {
    expect(
      toJson(
        shallow(<TopicQuestions activeTopic>Topic questions</TopicQuestions>)
      )
    ).toMatchSnapshot()
  })
})
