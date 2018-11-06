import React from 'react'

import { shallow } from 'enzyme'

import Topic from './'

describe('components:styled:Topic', () => {
  it('renders the Topic and CSS properties properly', () => {
    expect(toJson(shallow(<Topic>This Topic</Topic>))).toMatchSnapshot()
  })
})
