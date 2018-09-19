import React from 'react'
import { shallow } from 'enzyme'

import CurrentTopic from '.'

describe('components:CurrentTopic', () => {
  it('renders the CurrentTopic and CSS properties properly', () => {
    expect(
      toJson(shallow(<CurrentTopic>This Topic</CurrentTopic>).dive())
    ).toMatchSnapshot()
  })

  it('should display the current topic prop', () => {
    const currentTopic = 'Money'
    const wrapper = shallow(<CurrentTopic currentTopic={currentTopic} />)

    expect(wrapper.dive().text()).toEqual(currentTopic)
  })
})
