import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { state } from '../../state/fixtures'

import QuestionBox from '.'

const mockStore = configureStore()

const store = mockStore(state)

describe('containers:QuestionBox', () => {
  it('renders the QuestionBox', () => {
    expect(toJson(shallow(<QuestionBox store={store} />))).toMatchSnapshot()
  })

  it('should map activeQuestion to props', () => {
    const wrapper = shallow(<QuestionBox store={store} />)
    expect(wrapper.props().children).toBe('Is anyone chasing you for money?')
  })
})
