import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { length, map, path, sum } from 'ramda'

import { state } from '../../state/fixtures'
import QuestionCounter from '.'

const mockStore = configureStore()

const store = mockStore(state)

describe('containers:QuestionCounter', () => {
  it('renders the QuestionCounter', () => {
    expect(toJson(shallow(<QuestionCounter store={store} />))).toMatchSnapshot()
  })

  it('should map questionCount to props with defaultType', () => {
    const wrapper = shallow(<QuestionCounter store={store} />)

    const topics = path(['topics'], state)
    const getQuestions = path(['questions'])
    const numberOfQuestionsByTopic = map(t => {
      return length(getQuestions(t))
    }, topics)
    const totalNumberOfQuestions = sum(numberOfQuestionsByTopic)

    expect(wrapper.props().children).toBe(`1/${totalNumberOfQuestions}`)
  })
})
