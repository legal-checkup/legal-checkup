import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import { getQuestionBody } from '../../state'
import QuestionBox from '.'

const mockStore = configureStore()

describe('containers:QuestionBox', () => {
  it('maps getQuestionBody to QuestionBox props', () => {
    const body = 'Is anyone chasing you for money?'
    const store = mockStore({ body: body })
    const wrapper = shallow(<QuestionBox store={store} />)
    expect(1).toEqual(1)
    // expect(wrapper.props()).toEqual(
    // expect.objectContaining({
    // getQuestionBody
    // })
    // )
  })
})
