import NavButtonForward from '.'
import { QUESTION_SELECTED } from '../../state/constants'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

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

  it(`should map handleClick to dispatch the ${QUESTION_SELECTED} action`, () => {
    const activeQuestion = 1
    const expectedQuestion = activeQuestion + 1
    const store = mockStore({ activeQuestion: 1, responses: { 1: 'Yes' } })

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
