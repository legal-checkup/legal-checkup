import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { state } from '../../state/fixtures'
import { path } from 'ramda'

import CurrentTopic from '.'

const mockStore = configureStore()

const store = mockStore(state)

describe('containers:CurrentTopic', () => {
  it('renders the CurrentTopic', () => {
    expect(toJson(shallow(<CurrentTopic store={store} />))).toMatchSnapshot()
  })

  it('should map currentTopic to props', () => {
    const wrapper = shallow(<CurrentTopic store={store} />)
    const getTopicNameFromFixture = path(['topics', 0, 'name'])
    expect(wrapper.props().children).toBe(getTopicNameFromFixture(state))
  })
})
