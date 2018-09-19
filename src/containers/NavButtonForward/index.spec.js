import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import NavButtonForward from '.'
import { QUESTION_SELECTED } from '../../state'

const mockStore = configureStore()

describe('containers:NavButtonForward', () => {
  it('maps state and dispatch to props', () => {
    const store = mockStore({ count: 0, activeQuestion: 1 })
    const wrapper = shallow(<NavButtonForward store={store} />)

    expect(wrapper.props()).toMatchObject(
      expect.objectContaining({
        handleClick: expect.any(Function),
        unlocked: expect.any(Boolean)
      })
    )
  })

  it('should set unlocked to false when activeQuestion >= responseCount + 1', () => {
    const activeQuestion = 2
    const store = mockStore({
      activeQuestion,
      questions: { 1: {}, 2: {}, 3: {}, 4: {} },
      responses: { 1: 'Yes' }
    })
    const wrapper = shallow(<NavButtonForward store={store} />)

    expect(wrapper.props().unlocked).toEqual(false)
  })

  it('should set unlocked to false when activeQuestion is last question', () => {
    const activeQuestion = 4
    const state = {
      activeQuestion,
      questions: { 1: {}, 2: {}, 3: {}, 4: {} },
      responses: { 1: 'Yes', 2: 'Yes', 3: 'Yes', 4: 'Yes' }
    }
    const store = mockStore(state)
    const wrapper = shallow(<NavButtonForward store={store} />)

    expect(wrapper.props().unlocked).toEqual(false)
  })

  it('should set unlocked to true when activeQuestion is < responsesCount + 1 and !== questionsCount', () => {
    const store = mockStore({
      activeQuestion: 1,
      questions: { 1: {}, 2: {} },
      responses: { 1: 'Yes' }
    })
    const wrapper = shallow(<NavButtonForward store={store} />)

    expect(wrapper.props().unlocked).toEqual(true)
  })

  it(`should map handleClick to dispatch the ${QUESTION_SELECTED} action`, () => {
    const activeQuestion = 1
    const expectedQuestion = activeQuestion + 1
    const store = mockStore({
      activeQuestion: 1,
      questions: { 1: {}, 2: {} },
      responses: { 1: 'Yes' }
    })

    store.dispatch = jest.fn()

    const wrapper = shallow(<NavButtonForward store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: QUESTION_SELECTED,
      payload: {
        question: expectedQuestion
      }
    })
  })
})
