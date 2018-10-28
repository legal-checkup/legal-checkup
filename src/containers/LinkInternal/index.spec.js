import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { state } from '../../state/fixtures'

import LinkInternal from '.'

const mockStore = configureStore()

const store = mockStore(state)

const wrapper = shallow(<LinkInternal store={store} />)

describe('containers:LinkInternal', () => {
  it('renders the LinkInternal', () => {
    expect(toJson(shallow(<LinkInternal store={store} />))).toMatchSnapshot()
  })

  it('should push to router onClick', () => {
    wrapper.simulate('click', { preventDefault: () => {} })

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        payload: {
          args: [undefined],
          method: 'push'
        },
        type: '@@router/CALL_HISTORY_METHOD'
      }
    ])
  })
})
