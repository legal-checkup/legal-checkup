import React from 'react'
import { shallow } from 'enzyme'

import { getTopics } from '../../../../state/selectors'
import { state } from '../../../../state/fixtures'

import DesktopProgressBar from '.'

import configureStore from 'redux-mock-store'

import { create } from 'react-test-renderer'

const mockStore = configureStore()

const { checkup } = state

describe('components:checkup:ProgressBlock:DestopProgressBar', () => {
  it('matches the snapshot', () => {
    expect(
      create(
        <DesktopProgressBar>DesktopProgressBar</DesktopProgressBar>
      ).toJSON()
    ).toMatchSnapshot()
  })

  it('should render the DesktopProgressBar correctly with topics', () => {
    const topics = getTopics({ checkup })

    expect(toJson(<DesktopProgressBar topics={topics} />)).toMatchSnapshot()
  })

  it('should map state to props', () => {
    const store = mockStore({ checkup })
    const wrapper = shallow(<DesktopProgressBar store={store} />)

    expect(wrapper.props()).toEqual(
      expect.objectContaining({
        topics: getTopics({ checkup })
      })
    )
  })
})
