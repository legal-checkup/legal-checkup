import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import NavButton from '.'
import { NEXT_QUESTION, PREVIOUS_QUESTION } from '../../state'

const mockStore = configureStore()

describe('containers:NavButton', () => {
  it('maps state and dispatch to props', () => {
    const direction = 'back'
    const store = mockStore({ count: 0, activeQuestion: 1 })
    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        handleClick: expect.any(Function),
        unlocked: expect.any(Boolean)
      })
    )
  })

  it('should set unlocked to false when direction is back and activeQuestion <= 1', () => {
    const direction = 'back'
    const store = mockStore({ count: 0, activeQuestion: 1 })
    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    expect(wrapper.props().unlocked).toEqual(false)
  })

  it('should set unlocked to false when direction is forward and activeQuestion >= count + 1', () => {
    const direction = 'forward'
    const store = mockStore({ count: 0, activeQuestion: 1 })
    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    expect(wrapper.props().unlocked).toEqual(false)
  })

  it('should set unlocked to true when direction is back and activeQuestion > 1', () => {
    const direction = 'back'
    const store = mockStore({ count: 1, activeQuestion: 2 })
    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    expect(wrapper.props().unlocked).toEqual(true)
  })

  it('should set unlocked to true when direction is forward and activeQuestion < count + 1', () => {
    const direction = 'forward'
    const store = mockStore({ count: 1, activeQuestion: 1 })
    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    expect(wrapper.props().unlocked).toEqual(true)
  })

  it(`maps handleClick to dispatch ${PREVIOUS_QUESTION} action when direction is back`, () => {
    const direction = 'back'
    const store = mockStore({ count: 1, activeQuestion: 2 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: PREVIOUS_QUESTION
    })
  })

  it(`maps handleClick to dispatch ${NEXT_QUESTION} action when direction is forward`, () => {
    const direction = 'forward'
    const store = mockStore({ count: 1, activeQuestion: 1 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<NavButton direction={direction} store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: NEXT_QUESTION
    })
  })
})
