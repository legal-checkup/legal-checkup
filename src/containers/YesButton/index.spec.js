import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedYesButton from '.'
import { YES_BUTTON_CLICKED } from '../../state'

const mockStore = configureStore()

describe('containers:YesButton', () => {
  it('maps dispatch to props', () => {
    const store = mockStore({ count: 0 })
    const wrapper = shallow(<ConnectedYesButton store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        handleClick: expect.any(Function)
      })
    )
  })

  it(`maps handleClick to dispatch ${YES_BUTTON_CLICKED} action`, () => {
    const store = mockStore({ count: 1 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<ConnectedYesButton store={store} />)

    wrapper.props().handleClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: YES_BUTTON_CLICKED
    })
  })
})
