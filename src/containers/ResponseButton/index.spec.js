import ConnectedNoButton from '.'
import { USER_RESPONDED_WITH_NO } from '@state/constants'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

const mockStore = configureStore()

describe('containers:NoButton', () => {
  it('maps dispatch to props', () => {
    const store = mockStore({ count: 0 })
    const wrapper = shallow(<ConnectedNoButton store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        handleClick: expect.any(Function)
      })
    )
  })

  it(`maps handleClick to dispatch ${USER_RESPONDED_WITH_NO} action`, () => {
    const store = mockStore({ count: 1 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<ConnectedNoButton store={store} />)

    wrapper.props().handleClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: USER_RESPONDED_WITH_NO
    })
  })
})
