import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ProgressBar from '.'

const mockStore = configureStore()

import {
  QUESTION_SELECTED,
  PREVIOUS_QUESTION_REQUESTED,
  NEXT_QUESTION_REQUESTED,
  initialState
} from '../../state'

describe('containers:ProgressBar', () => {
  it('should map ProgressBar to props', () => {
    const activeQuestion = 1
    const store = mockStore({ activeQuestion: 1, questions: {} })
    const wrapper = shallow(<ProgressBar store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        activeQuestion
      })
    )
  })

  it('should map questionNumber to props', () => {
    const activeQuestion = 1
    const store = mockStore({ activeQuestion: 1, questions: {} })
    const wrapper = shallow(<ProgressBar store={store} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        handleClick: expect.any(Function),
        activeQuestion
      })
    )
  })

  it(`maps handleClick to dispatch ${QUESTION_SELECTED} action`, () => {
    const activeQuestion = 1
    const questionNumber = 2
    const store = mockStore(initialState)

    store.dispatch = jest.fn()

    const wrapper = shallow(
      <ProgressBar store={store} activeQuestion={activeQuestion} />
    )

    wrapper.props().handleClick(questionNumber)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: QUESTION_SELECTED,
      payload: {
        activeQuestion: questionNumber
      }
    })
  })

  it(`maps handlePrevious to dispatch ${PREVIOUS_QUESTION_REQUESTED} action`, () => {
    const activeQuestion = 2
    const questionNumber = 1
    const store = mockStore(initialState)

    store.dispatch = jest.fn()

    const wrapper = shallow(
      <ProgressBar store={store} activeQuestion={activeQuestion} />
    )

    wrapper.props().handlePrevious()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: PREVIOUS_QUESTION_REQUESTED
    })
  })

  it(`maps handleNext to dispatch ${NEXT_QUESTION_REQUESTED} action`, () => {
    const activeQuestion = 2
    const questionNumber = 3
    const store = mockStore(initialState)

    store.dispatch = jest.fn()

    const wrapper = shallow(
      <ProgressBar store={store} activeQuestion={activeQuestion} />
    )

    wrapper.props().handleNext()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: NEXT_QUESTION_REQUESTED
    })
  })
})
