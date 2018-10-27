import React from 'react'
import { shallow } from 'enzyme'

import { getTopics } from '@state/selectors'
import { state } from '@state/fixtures'

import DesktopProgressBar from '.'

describe('containers:DestopProgressBar', () => {
  it('should render the DesktopProgressBar correctly with no topics', () => {
    expect(toJson(shallow(<DesktopProgressBar />))).toMatchSnapshot()
  })

  it('should render the DesktopProgressBar correctly with topics', () => {
    const topics = getTopics(state)

    expect(
      toJson(shallow(<DesktopProgressBar topics={topics} />))
    ).toMatchSnapshot()
  })
})
