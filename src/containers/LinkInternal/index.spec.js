import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { state } from '../../state/fixtures'

import LinkInternal from '.'

const mockStore = configureStore()

const store = mockStore(state)
store.dispatch = jest.fn()
const wrapper = shallow(<LinkInternal store={store} />)

describe('containers:LinkInternal', () => {
  it('renders the LinkInternal', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should push to router onClick', () => {
    wrapper
      .dive()
      .props()
      .onClick({ preventDefault: () => {} })

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: {
        args: [undefined],
        method: 'push'
      },
      type: '@@router/CALL_HISTORY_METHOD'
    })
  })
})
