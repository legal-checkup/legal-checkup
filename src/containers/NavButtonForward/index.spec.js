import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import NavButtonForward from '.'
import { NEXT_QUESTION } from '../../state'

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

  it('should set unlocked to false when activeQuestion is >= count + 1', () => {
    const store = mockStore({ activeQuestion: 1, responses: {} })
    const wrapper = shallow(<NavButtonForward store={store} />)

    expect(wrapper.props().unlocked).toEqual(false)
  })

  it('should set unlocked to true when activeQuestion is < count + 1', () => {
    const store = mockStore({ activeQuestion: 1, responses: { 1: 'Yes' } })
    const wrapper = shallow(<NavButtonForward store={store} />)

    expect(wrapper.props().unlocked).toEqual(true)
  })

  it(`should map handleClick to dispatch the ${NEXT_QUESTION} action`, () => {
    const store = mockStore({ activeQuestion: 1, responses: { 1: 'Yes' } })

    store.dispatch = jest.fn()

    const wrapper = shallow(<NavButtonForward store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: NEXT_QUESTION
    })
  })
})
