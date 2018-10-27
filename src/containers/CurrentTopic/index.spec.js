import CurrentTopic from '.'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

const mockStore = configureStore()

const initialState = {
  activeQuestion: {
    topic: 'test'
  }
}

describe('containers:CurrentTopic', () => {
  it('should map currentTopic to props', () => {
    let store = mockStore(initialState)
    const wrapper = shallow(<CurrentTopic store={store} />)

    // expect(wrapper.props().children).toBe('test')
  })

  it('should set currentTopic prop to topic of activeQuestionIndex from state')
})
