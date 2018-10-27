import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import DesktopProgressBar from '.'

import { state } from '@state/fixtures'
import { getTopics } from '@state/selectors'

const mockStore = configureStore()

describe('containers:DestopProgressBar', () => {
  it('should map state to props', () => {
    const store = mockStore(state)
    const wrapper = shallow(<DesktopProgressBar store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        topics: getTopics(state)
      })
    )
  })
})
