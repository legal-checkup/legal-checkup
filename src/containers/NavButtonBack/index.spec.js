import NavButtonBack from '.'
import { QUESTION_SELECTED } from '../../state/constants'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

const mockStore = configureStore()

describe('containers:NavButton', () => {
  it('maps state and dispatch to props', () => {
    const store = mockStore({ count: 0, activeQuestion: 1 })
    const wrapper = shallow(<NavButtonBack store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        handleClick: expect.any(Function),
        unlocked: expect.any(Boolean)
      })
    )
  })

  it('should set unlocked to false when activeQuestion <= 1', () => {
    const store = mockStore({ count: 0, activeQuestion: 1 })
    const wrapper = shallow(<NavButtonBack store={store} />)

    expect(wrapper.props().unlocked).toEqual(false)
  })

  it('should set unlocked to true when activeQuestion > 1', () => {
    const store = mockStore({ count: 1, activeQuestion: 2 })
    const wrapper = shallow(<NavButtonBack store={store} />)

    expect(wrapper.props().unlocked).toEqual(true)
  })

  it(`maps handleClick to dispatch ${QUESTION_SELECTED} action`, () => {
    const activeQuestion = 2
    const expectedQuestion = activeQuestion - 1
    const store = mockStore({ count: 1, activeQuestion })

    store.dispatch = jest.fn()

    const wrapper = shallow(<NavButtonBack store={store} />)

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
