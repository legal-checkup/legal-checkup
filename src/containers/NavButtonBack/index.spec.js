import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import NavButtonBack from '.'
import { PREVIOUS_QUESTION } from '../../state'

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

  it(`maps handleClick to dispatch ${PREVIOUS_QUESTION} action`, () => {
    const store = mockStore({ count: 1, activeQuestion: 2 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<NavButtonBack store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: PREVIOUS_QUESTION
    })
  })
})
