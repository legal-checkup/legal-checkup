import React from 'react'
import { shallow } from 'enzyme'

import TopicName from '.'

describe('components:styled:TopicName', () => {
  it('renders the TopicName and CSS properties properly', () => {
    expect(toJson(shallow(<TopicName>Topic name</TopicName>))).toMatchSnapshot()
  })
})
