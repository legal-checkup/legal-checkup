import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedNoButton from '.'
import { NO_BUTTON_CLICKED } from '../../state'

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

  it(`maps handleClick to dispatch ${NO_BUTTON_CLICKED} action`, () => {
    const store = mockStore({ count: 1 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<ConnectedNoButton store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: NO_BUTTON_CLICKED
    })
  })
})
