import React from 'react'
import { shallow } from 'enzyme'

import CurrentTopic from '.'

describe('components:styled:CurrentTopic', () => {
  it('renders the CurrentTopic and CSS properties properly', () => {
    expect(
      toJson(shallow(<CurrentTopic>This Topic</CurrentTopic>))
    ).toMatchSnapshot()
  })
})
