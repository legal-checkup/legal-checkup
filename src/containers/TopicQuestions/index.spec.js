import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import TopicQuestions from '.'

import { state } from '@state/fixtures'
import { getCurrentTopicName, makeGetTopicQuestions } from '@state/selectors'

const mockStore = configureStore()
const getTopicQuestions = makeGetTopicQuestions()

describe('containers:TopicQuestions', () => {
  it('should map state to props', () => {
    const store = mockStore(state)
    const topic = getCurrentTopicName(state)
    const wrapper = shallow(<TopicQuestions store={store} topic={topic} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        topicQuestions: getTopicQuestions(state, { topic }),
        activeTopic: true
      })
    )
  })
})
