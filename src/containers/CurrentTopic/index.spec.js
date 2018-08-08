import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import CurrentTopic from '.'

const mockStore = configureStore()

describe('containers:CurrentTopic', () => {
  it('should map currentTopic to props', () => {
    const topic = 'Topic 1'
    const store = mockStore({ activeQuestion: 1, questions: { 1: { topic } } })
    const wrapper = shallow(<CurrentTopic store={store} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        currentTopic: expect.any(String)
      })
    )
  })

  it('should set currentTopic prop to topic of activeQuestion from state', () => {
    const topic = 'Topic 1'
    const store = mockStore({ activeQuestion: 1, questions: { 1: { topic } } })
    const wrapper = shallow(<CurrentTopic store={store} />)

    expect(wrapper.props().currentTopic).toEqual(topic)
  })
})
