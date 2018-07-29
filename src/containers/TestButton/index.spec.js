import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import TestButton from '.'
import { INITIAL_STATE, TEST_COUNT } from '../../state'

const mockStore = configureStore()

describe('containers:Square', () => {
  it(`maps handleClick to dispatch ${TEST_COUNT} action`, () => {
    const store = mockStore(INITIAL_STATE)

    store.dispatch = jest.fn()

    const wrapper = shallow(<TestButton store={store} />)

    wrapper
      .dive()
      .props()
      .onClick()

    expect(store.dispatch).toHaveBeenCalledWith({
      type: TEST_COUNT
    })
  })
})
