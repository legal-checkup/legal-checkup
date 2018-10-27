import React from 'react'
import { shallow } from 'enzyme'

import { state } from '@state/fixtures'
import { getCurrentTopicName, makeGetTopicQuestions } from '@state/selectors'

import TopicQuestions from '.'

const getTopicQuestions = makeGetTopicQuestions()

describe('components:TopicQuestions', () => {
  it('should render the TopicQestions and CSS properties properly', () => {
    expect(toJson(shallow(<TopicQuestions />))).toMatchSnapshot()
  })

  it('should render the TopicQestions and CSS properties properly when activeTopic', () => {
    const topic = getCurrentTopicName(state)

    expect(
      toJson(shallow(<TopicQuestions activeTopic={true} topic={topic} />))
    ).toMatchSnapshot()
  })

  it('should render the TopicQestions and CSS properties properly when activeTopic', () => {
    const topic = getCurrentTopicName(state)
    const topicQuestions = getTopicQuestions(state, { topic })

    expect(
      toJson(
        shallow(
          <TopicQuestions
            activeTopic={true}
            topic={topic}
            topicQuestions={topicQuestions}
          />
        )
      )
    ).toMatchSnapshot()
  })
})
