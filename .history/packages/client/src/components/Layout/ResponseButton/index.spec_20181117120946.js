import React from 'react'
import configureStore from 'redux-mock-store'

import { shallow } from 'enzyme'

import {
  NO,
  NOT_SURE,
  USER_RESPONDED_WITH_NO,
  USER_RESPONDED_WITH_NOT_SURE,
  USER_RESPONDED_WITH_YES,
  YES
} from '../../../state/constants'
import { state } from '../../state/fixtures'
import ResponseButton from '.'

const mockStore = configureStore()

describe('containers:ResponseButton', () => {
  it('renders the ResponseButton', () => {
    const store = mockStore(state)
    expect(toJson(shallow(<ResponseButton store={store} />))).toMatchSnapshot()
  })

  it('should dispatch onClick with NOT_SURE', () => {
    const store = mockStore(state)
    const wrapper = shallow(<ResponseButton store={store} type={NOT_SURE} />)
    wrapper.simulate('click')

    const actions = store.getActions()
    expect(actions).toEqual([{ type: USER_RESPONDED_WITH_NOT_SURE }])
  })

  it('should dispatch onClick with YES', () => {
    const store = mockStore(state)
    const wrapper = shallow(<ResponseButton store={store} type={YES} />)
    wrapper.simulate('click')

    const actions = store.getActions()
    expect(actions).toEqual([{ type: USER_RESPONDED_WITH_YES }])
  })

  it('should dispatch onClick with NO', () => {
    const store = mockStore(state)
    const wrapper = shallow(<ResponseButton store={store} type={NO} />)
    wrapper.simulate('click')

    const actions = store.getActions()
    expect(actions).toEqual([{ type: USER_RESPONDED_WITH_NO }])
  })
})
