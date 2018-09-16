import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import ConnectedNotSureButton from '.'
import { NOT_SURE_BUTTON_CLICKED } from '../../state'

const mockStore = configureStore()

describe('containers:NotSureButton', () => {
  it('maps dispatch to props', () => {
    const store = mockStore({ count: 0 })
    const wrapper = shallow(<ConnectedNotSureButton store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        handleClick: expect.any(Function)
      })
    )
  })

  it(`maps handleClick to dispatch ${NOT_SURE_BUTTON_CLICKED} action`, () => {
    const store = mockStore({ count: 1 })

    store.dispatch = jest.fn()

    const wrapper = shallow(<ConnectedNotSureButton store={store} />)

    wrapper.props().handleClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: NOT_SURE_BUTTON_CLICKED
    })
  })
})
