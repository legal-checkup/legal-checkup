import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { path } from 'ramda'

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
    const getQuestionBodyFromFixture = path([
      'topics',
      0,
      'questions',
      0,
      'body'
    ])
    expect(wrapper.props().children).toBe(getQuestionBodyFromFixture(state))
  })
})
